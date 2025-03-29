import react, { useCallback, useEffect, useState } from "react";
import styles from "./demo.module.scss";
import { useWindowSize } from "@util/generalSrc";

import { Image } from "image-js";
import Tesseract, { createWorker } from "tesseract.js";
import { useDropzone } from "react-dropzone";
import { holyRelicStats } from "@util/types";

const stats: holyRelicStats[] = [
  {
    stats: 0,
    text: "防御力％",
  },
  {
    stats: 0,
    text: "攻撃力％",
  },
  {
    stats: 0,
    text: "HP％",
  },
  {
    stats: 0,
    text: "元素チャージ％",
  },
  {
    stats: 0,
    text: "元素力％",
  },
  {
    stats: 0,
    text: "会心ダメージ％",
  },
  {
    stats: 0,
    text: "会心率",
  },
];

const holyRelicData = [
  {
    text: "防御力",
    idx: 0,
  },
  {
    text: "攻撃力",
    idx: 1,
  },
  {
    text: "HP",
    idx: 2,
  },
  {
    text: "元素チャージ",
    idx: 3,
  },
  {
    text: "元素力",
    idx: 4,
  },
  {
    text: "会心ダメージ",
    idx: 5,
  },
  {
    text: "会心率",
    idx: 6,
  },
];

export default function App() {
  const [base64Images, setBase64Images] = useState<string>("");
  const [imageText, setImageText] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [getStats, setStats] = useState<holyRelicStats[]>(stats);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const getTextImage = async (base64CapImg: string) => {
    const image = await Image.load(base64CapImg);
    if (image) {
      // 画像が取得できた場合のみ処理を続行する
      const ocrImg = image
        .crop({ x: 0, y: 350 }) // 画像の上部100pxを切り取り
        .flipY() // 上下反転
        .crop({ x: 1450, y: 600 }) // 画像の右下(反転前の右上)を切り取り
        .flipY() // 反転を戻す
        .grey() // グレースケール化
        //.invert() // 色反転
        .toBase64("image/png"); // base64形式に変換
      setBase64Images(`${ocrImg}`);
      return `data:image/png;base64,${ocrImg}`;
    }
  };

  const onDrop = useCallback((files: File[]) => {
    if (files.length === 0) {
      setMsg("読み込みに失敗しました。");
      return;
    }
    const file = files[0];

    // png, jpeg以外のファイルなら何もしない
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      setMsg("png, jpeg以外のファイルがドロップされました。");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setMsg("読み込み中");
      setImageText("");
      const imageSrc: string = fileReader.result as string;
      // 切り取り
      getTextImage(imageSrc).then((ocrImg: string | undefined) => {
        if (ocrImg != undefined) {
          // 切り取った画像の文字を読み込み
          imageToText(ocrImg);
        }
      });
    };

    fileReader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // 文字読み込み
  const imageToText = async (base64Image: string) => {
    const worker = await createWorker("jpn");

    const {
      data: { text },
    } = await worker.recognize(base64Image);
    console.log(text);
    await worker.terminate();

    const a: string[] = text.replace(/\s/g, "").split("・");

    a.forEach((str: string, idx: number) => {
      const text = str.replace(/\s+/g, "");
      const regex1 = /\d+\.\d+\%|\d+\%/;
      const regex2 = /\d+\.\d+|\d+/;

      if (regex1.test(text)) {
        console.log(text.match(regex1));
        const matchText = text.match(regex1);
        if (matchText) {
          holyRelicData.forEach((holyRelic, idx) => {
            console.log(matchText.input);
            if (
              matchText.input &&
              matchText.input.indexOf(holyRelic.text) !== -1
            ) {
              console.log(holyRelic.text);
              stats[holyRelic.idx].stats = Number(
                matchText[0].replace("%", "")
              );
            }
          });

          console.log(stats);
        }
      } else if (regex2.test(text)) {
        //console.log(text.match(regex2));
      }
    });
    setImageText(text.replace(/\s/g, ""));
  };

  useEffect(() => {
    setMsg("");
  }, [imageText]);

  return (
    <div>
      <div>
        {msg != "" ? <div>{msg}</div> : <></>}
        ドラッグ&ドロップ
        <div
          {...getRootProps()}
          style={{
            height: `400px`,
            width: `400px`,
            border: `solid 1px #000000`,
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      </div>

      {base64Images != "" ? (
        <div>
          <img src={`data:image/png;base64,${base64Images}`} />
        </div>
      ) : (
        <></>
      )}
      {stats.map((data: holyRelicStats, idx: number) => (
        <>
          {data.text} : {data.stats}
          <br />
        </>
      ))}
    </div>
  );
}
