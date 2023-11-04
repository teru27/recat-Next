import {
  decodeBase64CBC,
  decodeBase64GCM,
  decodeBase64GCM2,
  encodeBase64CBC,
  encodeBase64GCM,
} from "../../util/aes256";

export default function Home() {
  {
    const data = "篠原輝久";
    const algorithm = "aes-256-cbc";
    const key = "89de3e5de3a2447c9c56d65346ce1f98";
    const ivByte = 16;
    const encData = encodeBase64CBC(data, algorithm, key, ivByte);
    const decoData = decodeBase64CBC(encData, algorithm, key, ivByte);
    console.log("アルゴリズム:" + algorithm);
    console.log("暗号化:" + encData);
    console.log("復号化:" + decoData);
  }
  {
    const data = "篠原輝久";
    const algorithm = "aes-256-gcm";
    const key = "S*kXnH`O,be?lof;hRyV}UvT%J2VW_<`";
    const ivByte = 12;
    const encData = encodeBase64GCM(data, key, ivByte);

    const decoData = decodeBase64GCM(
      encData.ciphertext,
      encData.iv,
      encData.tag,
      key
    );
    console.log("アルゴリズム:" + algorithm);
    console.log("暗号化:" + encData.ciphertext);
    console.log("復号化:" + decoData);
  }
  {
    const key = "S*kXnH`O,be?lof;hRyV}UvT%J2VW_<`";
    const ciphertext =
      "8ml7OH75U8i9h581vtA521QImSgrrWWxxIBPFTgwDJy/TRrpG1voHUl6hw==";
    const decoData = decodeBase64GCM2(ciphertext, key);
    console.log("暗号化:" + ciphertext);
    console.log("復号化:" + decoData);
  }
  return <div></div>;
}
