import Link from "next/link";
import styles from "../pages/index.module.scss";

export default function Home() {
  const links = [
    { naem: "2023_01_12", link: "/ex/2023_01_12" },
    { naem: "2023_02_09", link: "/ex/2023_02_09" },
    { naem: "2023_03_09", link: "/ex/2023_03_09" },
    { naem: "aes-256-cbc", link: "/cipher" },
    { naem: "url", link: "/url" },
  ];

  return (
    <div>
      {links.map((link, index) => (
        <div key={`${index}`} className={styles.link}>
          <Link href={`${link.link}`} legacyBehavior>
            <a>{link.naem}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
