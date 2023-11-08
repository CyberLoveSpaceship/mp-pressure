import path from "path";
import fs from "fs/promises";

export async function GET() {
  const url = path.join("public", "content");
  const dropdownsContentPath = url;
  const fileNames = await fs.readdir(dropdownsContentPath);

  const data = await Promise.all(
    fileNames.map(async (fileName, index) => {
      const filePath = path.join(dropdownsContentPath, fileName);
      const heading = path.parse(fileName).name;
      const content = await fs.readFile(filePath, { encoding: "utf8" });
      return {
        uuid: index,
        heading,
        content,
      };
    }),
  );

  return Response.json(data);
}
