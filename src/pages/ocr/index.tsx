import react, { useCallback, useEffect, useState } from "react";
import styles from "./demo.module.scss";
import { useWindowSize } from "@util/generalSrc";

import Tesseract, { createWorker } from "tesseract.js";
import { useDropzone } from "react-dropzone";

export default function App() {
  const [base64Images, setBase64Images] = useState<string>("");
  const [imageText, setImageText] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
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
      imageToText(imageSrc);
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
      <div>{imageText}</div>
    </div>
  );
}
