import React, { useEffect, useState } from "react";

import styles from "../url/url.module.scss";

type item = {
  URL: string;
  id: string;
  menberId: string;
  parts: string;
  price: string;
  productName: string;
};

export default function Home() {
  const NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
  const NEXT_PUBLIC_GOOGLE_SHEETS_DOC_ID =
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_DOC_ID;

  const NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY;

  const [allProduct, setAllProduct] = useState<item[]>([]);

  const [loding, setLoding] = useState<boolean>(true);

  // 連想配列に変換
  const CsvDic = (props: any) => {
    const [header, ...rows] = props;
    return rows.map((row: any[]) =>
      row.reduce(
        (acc: any, cell: any, i: string | number) => ({
          ...acc,
          [header[i]]: cell,
        }),
        {}
      )
    );
  };

  // スプレットシートから情報を取得
  useEffect(() => {
    // tureのときのみ動かす
    if (loding) {
      fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${NEXT_PUBLIC_GOOGLE_SHEETS_DOC_ID}/values/sheet1?key=${NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY}`
      )
        .then((res) => res.json())
        .then((datas) => setAllProduct(CsvDic(datas.values)));
    }
    console.log("loding");
    setLoding(false);
  }, [loding]);

  const [setInput, getInput] = useState<string>();

  // スプレットシートにURLを送る
  const click = () => {
    const re = /[https://sakura-checker.jp/]+/;

    if (setInput && setInput.match(re)) {
      console.log("送信");
      // GAS側で data プロパティにアクセスしているため、
      // クライアントから送るデータにも data プロパティが必要。

      const sellNumber = allProduct.length + 2;
      const sourceList = {
        sheetNo: 2,
        data: [
          {
            menberId: "1",
            id: `${sellNumber}`,
            parts: "",
            URL: `${setInput}`,
            productName: `=if(D${sellNumber}="","",SUBSTITUTE(SUBSTITUTE(IMPORTXML(D${sellNumber},"//title"),"【サクラチェッカー】",""),"のやらせ評価/口コミをチェック","")) `,
            price: `=if(D${sellNumber}="","",IMPORTXML(D${sellNumber},"//*[@id='itemprice']")) `,
          },
        ],
      };

      const postparam = {
        method: "POST",
        body: JSON.stringify(sourceList),
      };

      fetch(
        `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
        postparam
      )
        .then((response) => {
          console.log(response.status);
          return response.json();
        })
        .then((data) => {
          console.log(data.result);
          setLoding(true);
        })
        .catch((err) => {
          console.log("Error!");
        });
    } else {
    }
  };

  const [sumPrice, setSumPrice] = useState<item[]>([]);
  let sum = 0;
  // 合計側に移動してきたときに合計金額を計算する
  useEffect(() => {
    sumPrice.forEach((item: item, index: number) => {
      sum = sum + Number(item.price);
    });
  }, [sumPrice]);

  return (
    <div className={styles.main}>
      <h1>桜チェッカーのURLから値段と商品名を抜き出す</h1>
      <div className={styles.inputBox}>
        <div className={styles.inputs}>
          <input
            type="text"
            onChange={(e) => getInput(e.target.value)}
            className={styles.inputs}
          />
          <button onClick={() => click()} className={styles.button}>
            {" "}
            送信
          </button>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.box}>
          <h2>商品一覧</h2>
          {allProduct.map((item: item, index: number) => (
            <div className={styles.itemBox}>
              <div className={styles.itemName}>商品名：{item.productName}</div>
              <div>値段：{item.price}</div>
              <div></div>
            </div>
          ))}
        </div>
        <div className={styles.box}>
          <h2>合計</h2>
          {sumPrice.map((item: item, index: number) => (
            <div className={styles.itemBox}>
              <div className={styles.item}>商品名：{item.productName}</div>
              <div>値段：{item.price}</div>
            </div>
          ))}
          <div>合計金額：{sum}</div>
        </div>
      </section>
    </div>
  );
}

function ArrMapRender(itemArray: item[]) {
  // <ArrMapRender {...allProduct} />
  return (
    <>
      {itemArray.map((item: item, index: number) => (
        <div className={styles.itemBox}>
          <div className={styles.item}>商品名：{item.productName}</div>
          <div>値段：{item.price}</div>
        </div>
      ))}
    </>
  );
}
