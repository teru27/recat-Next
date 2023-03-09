import Link from "next/link";

export default function Home() {
  const links = [
    { naem: "2023_01_12", link: "/ex/2023_01_12" },
    { naem: "2023_02_09", link: "/ex/2023_02_09" },
    { naem: "2023_03_09", link: "/ex/2023_03_09" },
    { naem: "aes-256-cbc", link: "/cipher" },
  ];

  return (
    <div>
      {links.map((link, index) => (
        <div key={`${index}`}>
          <Link href={`${link.link}`} legacyBehavior>
            <a>{link.naem}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
