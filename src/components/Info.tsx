import fs from "fs";
import path from "path";
import Dropdowns, { DropdownContent } from "./Dropdowns";

export default function Info() {
  const dropdownContents = getDropdownContents();
  return <Dropdowns items={dropdownContents} />;
}

export function getDropdownContents(): DropdownContent[] {
  const url = path.join("public", "content");
  const dropdownsContentPath = url;
  const fileNames = fs.readdirSync(dropdownsContentPath);
  const dropdownContents = fileNames.map((fileName, index) => ({
    uuid: index,
    heading: fileName,
    content: fs.readFileSync(path.join(dropdownsContentPath, fileName), {
      encoding: "utf8",
    }),
  }));
  console.log(dropdownContents);
  return dropdownContents;
}
