import react, { useCallback, useEffect, useState } from "react";
import styles from "./demo.module.scss";
import { useWindowSize } from "@util/generalSrc";

import { Image } from "image-js";
import Tesseract, { createWorker } from "tesseract.js";
import { useDropzone } from "react-dropzone";
import { holyRelicStats } from "@util/types";

export default function App() {
  const [base64Images, setBase64Images] = useState<string>("");
  const [imageText, setImageText] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  // 取得した画像をカットする
  const getTextImage = async (base64CapImg: string) => {
    const image = await Image.load(base64CapImg);
    if (image) {
      // 画像が取得できた場合のみ処理を続行する
      const ocrImg = image
        .crop({ x: 150, y: 270 }) // 画像の上部100pxを切り取り
        .flipY() // 上下反転
        .crop({ x: 1400, y: 750 }) // 画像の右下(反転前の右上)を切り取り
        .flipY() // 反転を戻す

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
    setImageText(text.replace(/\s/g, ""));
  };

  const calcScore = () => {};

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
          <div>
            <img src={`data:image/png;base64,${base64Images}`} />
          </div>
          <div>{imageText}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
