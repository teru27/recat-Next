import Link from "next/link";
/* import * as fs from "fs";

export function getDirectoryList(dirPath: string): string[] {
  let dirList: string[] = new Array();

  dirList = fs
    .readdirSync(dirPath, {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return dirList;
} */

export default function Home() {
  const linknames: string[] = ["2023_01_12"];
  return (
    <div>
      {linknames.map((linkname, index) => (
        <div key={`${index}`}>
          <Link href={`${linkname}`}>{linkname}</Link>
        </div>
      ))}
    </div>
  );
}
