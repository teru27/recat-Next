import Link from "next/link";

export default function Home() {
  const test = (str: string, Anser: string): boolean | string => {
    let count: number = 0;

    console.log(`${count}` === Anser ? true : count + "=" + Anser);
    return `${count}` === Anser ? true : count + "=" + Anser;
  };

  const exampleUrl = "";
  return (
    <div>
      問題URL:
      <Link href={exampleUrl}>{exampleUrl}</Link>
    </div>
  );
}
