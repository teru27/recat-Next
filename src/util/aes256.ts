import * as crypto from "crypto";

// 文字コード
const CHARCODE = "utf8";
// ベース
const BASE = "base64";

/**
 * 参照：https://www.kwbtblog.com/entry/2019/07/19/155421
 * @param data 暗号化する文字
 * @param algorithm アルゴリズム
 * @param key 共通鍵
 * @param ivByte ivのバイトの長さ
 * @returns
 */
export function encodeBase64CBC(
  data: string,
  algorithm: string,
  key: string,
  ivByte: number
): string {
  // 16byteのランダム値を生成してIVとする
  const iv = crypto.randomBytes(ivByte);

  // 暗号器作成
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  // dataをバイナリにして暗号化
  const encData = cipher.update(Buffer.from(data));

  // 末端処理 ＆ 先頭にivを付与し、バイナリをbase64(文字列)にして返す
  return Buffer.concat([iv, encData, cipher.final()]).toString(BASE);
}

/**
 * 参照：https://www.kwbtblog.com/entry/2019/07/19/155421
 * @param data 暗号化された文字
 * @param algorithm アルゴリズム
 * @param key 共通鍵
 * @param ivByte ivのバイトの長さ
 * @returns
 */
export function decodeBase64CBC(
  data: string,
  algorithm: string,
  key: string,
  ivByte: number
): string {
  // 受け取った暗号化文字列をバイナリに変換
  const buff = Buffer.from(data, BASE);

  // iv値である、先頭16byteを取り出す
  const iv = buff.slice(0, ivByte);
  // iv値以降の、暗号化データを取り出す
  const encData = buff.slice(ivByte);

  // 復号器作成
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  // 暗号化データを復号化
  const decData = decipher.update(encData);

  // 末端処理 ＆ バイナリを文字列に戻す
  return Buffer.concat([decData, decipher.final()]).toString(CHARCODE);
}

/**
 * 参照：https://www.npmjs.com/package/aes-256-gcm?activeTab=explore
 * @param data 暗号化する文字
 * @param key 共通鍵
 * @param ivByte ivのバイトの長さ
 * @returns
 */
export function encodeBase64GCM(data: string, key: string, ivByte: number) {
  const ALGORITHM = "aes-256-gcm";
  // 16byteのランダム値を生成してIVとする
  const iv = crypto.randomBytes(ivByte);
  // 暗号器作成
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  // dataをバイナリにして暗号化
  let ciphertext = cipher.update(data, CHARCODE, BASE);
  ciphertext += cipher.final(BASE);

  return {
    ciphertext,
    iv: iv.toString(BASE),
    tag: cipher.getAuthTag().toString(BASE),
  };
}
/**
 * 参照：https://www.npmjs.com/package/aes-256-gcm?activeTab=explore
 * @param data 暗号化された文字
 * @param iv ランダムな文字列
 * @param tag 認証タグ？
 * @param key 共通鍵
 * @returns
 */
export function decodeBase64GCM(
  data: string,
  iv:
    | WithImplicitCoercion<string>
    | { [Symbol.toPrimitive](hint: "string"): string },
  tag:
    | WithImplicitCoercion<string>
    | { [Symbol.toPrimitive](hint: "string"): string },
  key: crypto.CipherKey
) {
  // アルゴリズム
  const ALGORITHM = "aes-256-gcm";

  const iv1 = Buffer.from(data, BASE);
  // 復号器作成
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    key,
    Buffer.from(iv, "base64")
  );

  const tag1 = Buffer.from(data, BASE);
  // 認証の確認？
  decipher.setAuthTag(Buffer.from(tag, "base64"));

  // 暗号化データを復号化
  let cleartext = decipher.update(data, BASE, CHARCODE);
  cleartext += decipher.final(CHARCODE);

  return cleartext;
}

/**
 * 参照：https://www.npmjs.com/package/aes-256-gcm?activeTab=explore
 * @param data 暗号化された文字
 * @param key 共通鍵
 * @returns
 */
export function decodeBase64GCM2(data: string, key: crypto.CipherKey) {
  // アルゴリズム
  const ALGORITHM = "aes-256-gcm";

  const iv = Buffer.from(data, BASE).slice(0, 12);
  // 復号器作成
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);

  const BFF = Buffer.from(data, BASE);
  // tag認証の確認？
  decipher.setAuthTag(BFF.slice(BFF.length - 16));

  const text = Buffer.from(data, BASE).slice(12, BFF.length - 16);
  // 暗号化データを復号化
  let cleartext = decipher.update(text.toString(BASE), BASE, CHARCODE);
  cleartext += decipher.final(CHARCODE);

  return cleartext;
}
