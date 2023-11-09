import { Suspense } from "react";
import RepSearch from "~/components/RepSearch";
import path from "path";
import fs from "fs/promises";
import Markdown from "react-markdown";
import matter from "gray-matter";
import { ReactElement } from "react";
import { Params, Locale } from "~/locale";

export type DropdownItem = {
  heading: string;
  content: ReactElement<any, any>;
};

type LocaleDropdowns = { [L in Locale]: DropdownItem[] };

export default async function Home({ params: { lang } }: { params: Params }) {
  const allDropdownItems = await getDropdownItems();
  const dropdownItems = allDropdownItems[lang];
  return (
    <Suspense>
      <RepSearch dropdownItems={dropdownItems} />
    </Suspense>
  );
}

async function getDropdownItems() {
  const dropdownsContentPath = path.join("public", "content", "dropdowns");
  const langs = await fs.readdir(dropdownsContentPath);

  // get all dropdowns into array of obj
  const dropdowns: LocaleDropdowns = (
    await Promise.all(
      langs.map(async (lang) => {
        const langPath = path.join(dropdownsContentPath, lang);
        const fileNames = await fs.readdir(langPath);

        // get dropdowns per lang
        const langDropdowns = await Promise.all(
          fileNames.map(async (fileName) => {
            const filePath = path.join(langPath, fileName);
            const mdRaw = await fs.readFile(filePath, { encoding: "utf8" });
            const md = matter(mdRaw);
            const mdRendered = (
              <>
                <Markdown>{md.content}</Markdown>
              </>
            );
            const dropdownContent: DropdownItem = {
              heading: md.data?.heading ?? "",
              content: mdRendered,
            };
            return dropdownContent;
          }),
        );

        return {
          key: lang,
          val: langDropdowns,
        } as {
          key: Locale;
          val: DropdownItem[];
        };
      }),
    )
  ).reduce((acc, curr) => {
    // merge objects into single object with lang keys
    acc[curr.key] = curr.val;
    return acc;
  }, {} as LocaleDropdowns);

  return dropdowns;
}
