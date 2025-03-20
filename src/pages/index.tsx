import Link from "next/link";
import styles from "../pages/index.module.scss";

export default function Home() {
  const links = [
    { naem: "2023_01_12", link: "/ex/2023_01_12" },
    { naem: "2023_02_09", link: "/ex/2023_02_09" },
    { naem: "2023_03_09", link: "/ex/2023_03_09" },
    { naem: "aes-256-cbc", link: "/cipher" },
    { naem: "todo", link: "/todo" },
    { naem: "yomiage", link: "/yomiage" },
    { naem: "dnd-demo", link: "/dnd-demo" },
    { naem: "demo", link: "/demo" },
    { naem: "demoClick", link: "/demoClick" },
    { naem: "aimlab", link: "/aimlab" },
    { naem: "modal", link: "/modal" },
    { naem: "react-timer-hook", link: "/react-timer-hook" },
    { naem: "tanStackdemo", link: "/tanStackdemo" },
    { naem: "Gomoku", link: "/Gomoku" },
    { naem: "calcio", link: "/calcio" },
    { naem: "dad", link: "/dad" },
    { naem: "ocr", link: "/ocr" },
  ];

  return (
    <div>
      <h1>page map</h1>
      {links.map((link, index) => (
        <div key={`${index}`}>
          <Link href={`${link.link}`} legacyBehavior>
            <ul>
              <li>
                <a className={styles.link}>{link.naem}</a>
              </li>
            </ul>
          </Link>
        </div>
      ))}
    </div>
  );
}
