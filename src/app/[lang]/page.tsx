import { Suspense } from "react";
import RepSearch from "~/components/RepSearch";
import path from "path";
import fs from "fs/promises";
import Markdown from "react-markdown";
import { ReactElement } from "react";

export type DropdownItem = {
  uuid: number;
  heading: string;
  content: ReactElement<any, any>;
};

export default async function Home() {
  const allDropdownItems = await getDropdownItems();
  const dropdownItems = allDropdownItems.en;
  return (
    <Suspense>
      <RepSearch dropdownItems={dropdownItems} />
    </Suspense>
  );
}

export async function getDropdownItems() {
  const dropdownsContentPath = path.join("public", "content");

  const fileNames = await fs.readdir(dropdownsContentPath);

  // process files into Dropdown objects
  const dropdowns: DropdownItem[] = await Promise.all(
    fileNames.map(async (fileName, index) => {
      const filePath = path.join(dropdownsContentPath, fileName);
      const heading = path.parse(fileName).name.replaceAll(/^\d-/g, "");
      const contentRaw = await fs.readFile(filePath, { encoding: "utf8" });
      const contentRendered = (
        <>
          <Markdown>{contentRaw}</Markdown>
        </>
      );
      const dropdownContent: DropdownItem = {
        uuid: index,
        heading,
        content: contentRendered,
      };
      return dropdownContent;
    }),
  );

  return {
    en: dropdowns,
  };
}
