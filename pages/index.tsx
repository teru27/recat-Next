import Link from "next/link";

export default function Home() {
  const links = ["2023_01_12", "2023_02_09"];

  return (
    <div>
      {links.map((link, index) => (
        <div key={`${index}`}>
          <Link href={`/ex/${link}`} legacyBehavior>
            <a>{link}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
