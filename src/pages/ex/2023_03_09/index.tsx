import Link from "next/link";
import {
  bogoSort,
  intersectionCoordinate,
  sum2Array,
} from "../../../util/generalSrc";

// 移動後のインデックス
const index = {
  a: ["01", "02", "00"],
  b: ["11", "12", "10"],
  c: ["21", "22", "20"],
  d: ["20", "00", "10"],
  e: ["21", "01", "11"],
  f: ["22", "02", "12"],
  g: ["22", "20", "21"],
  h: ["12", "10", "11"],
  i: ["02", "00", "01"],
  j: ["12", "22", "02"],
  k: ["11", "21", "01"],
  l: ["10", "20", "00"],
};

type keys =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l";
const alphabet: string[] = ["d", "e", "f", "j", "k", "l"];
export default function blockRotate() {
  bogoSort([1, 2], [1, 2]);

  const test = (str: string, Anser?: string): boolean | string => {
    let loteAnser: string = "";

    // 入れ替え後の値を格納する配列
    const board: number[][] = sum2Array(3, 1);
    // 基にする配列
    let board2: number[][] = sum2Array(3, 1);

    let arr = str.split("");

    for (var i = 0; i < arr.length; i++) {
      const key = arr[i];
      const arrIndexs = index[key as keys];

      // アルファベット別にに移動す
      for (let j = 0; j < arrIndexs.length; j++) {
        const index = arrIndexs[j].split("");
        // 縦移動
        if (alphabet.includes(key)) {
          board[j][Number(index[1])] =
            board2[Number(index[0])][Number(index[1])];
        } else {
          // 横移動
          board[Number(index[0])][j] =
            board2[Number(index[0])][Number(index[1])];
        }
      }

      // 基にする値の更新
      for (let x = 0; x < board.length; x++) {
        board2[x] = [...board[x]];
      }
    }

    // 二次元配列を文字列化
    for (var i = 0; i < board.length; i++) {
      loteAnser += i !== 2 ? `${board[i].join("")}/` : board[i].join("");
    }

    console.log(loteAnser === Anser ? true : loteAnser + "=" + Anser);
    return `${loteAnser}` === Anser ? true : loteAnser + "=" + Anser;
  };
  /*1*/ test("a", "231/456/789");
  /*1*/ test("b", "123/564/789");
  /*1*/ test("c", "123/456/897");

  /*1*/ test("d", "723/156/489");
  /*2*/ test("e", "183/426/759");
  /*1*/ test("f", "129/453/786");

  /*3*/ test("g", "123/456/978");
  /*3*/ test("h", "123/645/789");
  /*3*/ test("i", "312/456/789");

  /*4*/ test("j", "126/459/783");
  /*4*/ test("k", "153/486/729");
  /*4*/ test("l", "423/756/189");

  /*0*/ test("aegj", "286/435/971");
  /*1*/ test("a", "231/456/789");
  /*2*/ test("e", "183/426/759");
  /*3*/ test("g", "123/456/978");
  /*4*/ test("j", "126/459/783");
  /*5*/ test("bb", "123/645/789");
  /*6*/ test("jjj", "123/456/789");
  /*7*/ test("bd", "723/164/589");
  /*8*/ test("ah", "231/645/789");
  /*9*/ test("bj", "124/569/783");
  /*10*/ test("db", "723/561/489");
  /*11*/ test("dh", "723/615/489");
  /*12*/ test("dl", "123/456/789");
  /*13*/ test("hc", "123/645/897");
  /*14*/ test("gf", "128/453/976");
  /*15*/ test("hl", "623/745/189");
  /*16*/ test("ja", "261/459/783");
  /*17*/ test("ld", "123/456/789");
  /*18*/ test("ki", "315/486/729");
  /*19*/ test("lfa", "294/753/186");
  /*20*/ test("kga", "531/486/972");
  /*21*/ test("dbi", "372/561/489");
  /*22*/ test("che", "193/625/847");
  /*23*/ test("iea", "823/416/759");
  /*24*/ test("gbl", "523/964/178");
  /*25*/ test("egj", "186/425/973");
  /*26*/ test("jcf", "127/456/839");
  /*27*/ test("djh", "726/915/483");
  /*28*/ test("hld", "123/645/789");
  /*29*/ test("leeh", "453/678/129");
  /*30*/ test("heja", "851/629/743");
  /*31*/ test("cakh", "251/649/837");
  /*32*/ test("bhjik", "652/489/713");
  /*33*/ test("eabji", "483/269/751");
  /*34*/ test("cdbch", "823/156/974");
  /*35*/ test("ckgajc", "536/492/817");
  /*36*/ test("ggchha", "231/564/978");
  /*37*/ test("gfbkeg", "128/534/697");
  /*38*/ test("agfbcbf", "239/148/765");
  /*39*/ test("ekahijf", "123/645/789");
  /*40*/ test("hajdjbe", "789/432/615");
  /*41*/ test("elgililj", "976/325/814");
  /*42*/ test("chffefif", "317/629/845");
  /*43*/ test("ilbbihak", "462/587/319");
  /*44*/ test("abcdefghijkl", "123/456/789");
  /*45*/ test("hkijbglfaced", "768/125/493");
  /*46*/ test("dfkbjiechlga", "256/387/419");
  /*47*/ test("hgfkbidlajce", "186/745/239");
  /*48*/ test("baciefjhgkdl", "153/482/796");
  const exampleUrl = "http://nabetani.sakura.ne.jp/hena/ordf09rotbox/";
  return (
    <div>
      問題URL:
      <a href={exampleUrl} target={"_blank"}>
        {exampleUrl}
      </a>
    </div>
  );
}
