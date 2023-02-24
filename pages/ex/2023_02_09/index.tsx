import Link from "next/link";
import {
  dimensional2Array,
  rotate2Array,
  rotationMatrix,
} from "../../../utli/generalSrc";

export default function blockRotate() {
  const coordinate: string[][] = [
    ["-1,2", "0,2", "1,2", "2,2", "3,2"],
    ["-1,1", "0,1", "1,1", "2,1", "3,1"],
    ["-1,0", "0,0", "1,0", "2,0", "3,0"],
    ["-1,-1", "0,-1", "1,-1", "2,-1", "3,-1"],
    ["-1,-2", "0,-2", "1,-2", "2,-2", "3,-2"],
  ];

  console.log("90");
  console.log(rotate2Array(coordinate, "l", 90));
  console.log("180");
  console.log(rotate2Array(coordinate, "l", 180));
  console.log("270");
  console.log(rotate2Array(coordinate, "l", 270));

  /*   console.log(rotate2Array(coordinate, "r", 90));
  console.log(rotate2Array(coordinate, "r", 180));
  console.log(rotate2Array(coordinate, "r", 270)); */

  const test = (str: string, Anser?: string): boolean | string => {
    const five = 5;
    let flag = true;
    let loteAnser = "";

    let arr = str.split(":");
    const AorB = arr[0];
    let numberArr = arr[1].split("/");

    let board: string[][] = dimensional2Array(five) as string[][];

    for (var i = 0; i < five; i++) {
      const number = numberArr[i];
      if (flag) {
        for (var j = 0; j < five; j++) {
          if (number[j] === "1") {
            const XorY = coordinate[i][j].split(",");

            let { X, Y } = rotationMatrix(
              Number(XorY[0]),
              Number(XorY[1]),
              270
            );

            Y = AorB === "b" ? Y + 1 : Y;

            const XandY = X + "," + Y;
            let indexNumberX = coordinate.findIndex((coord) =>
              coord.includes(XandY)
            );

            if (indexNumberX > -1) {
              const indexNumberY = coordinate[indexNumberX].findIndex(
                (arr) => arr === XandY
              );

              if (indexNumberY > -1) {
                board[indexNumberX][indexNumberY] = "1";
              }
            } else {
              flag = false;
            }
          }
        }
      }
    }

    if (!flag) {
      loteAnser = "-";
    } else {
      for (var i = 0; i < 5; i++) {
        const number = board[i];
        for (var j = 0; j < 5; j++) {
          loteAnser = loteAnser + number[j];
        }
        loteAnser = i < 4 ? loteAnser + "/" : loteAnser;
      }
    }

    console.log(`${loteAnser}` === Anser ? true : loteAnser + "=" + Anser);
    return `${loteAnser}` === Anser ? true : loteAnser + "=" + Anser;
  };

  const exampleUrl = "http://nabetani.sakura.ne.jp/hena/ordf05rotblo/";
  return (
    <div>
      問題URL:
      <Link href={exampleUrl}>{exampleUrl}</Link>
    </div>
  );
}
