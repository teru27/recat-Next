import React, { useEffect, useState } from "react";

import styles from "../url/url.module.scss";

type item = {
  URL: string;
  itemId: string;
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

  // menberIdで絞り込んだデータ
  const [userAllProduct, setUserAllProduct] = useState<item[]>([]);

  // スプレットシートから全情報
  const [AllProduct, setAllProduct] = useState<item[]>([]);

  // 追加後などのあとにデータの取得フラグ
  const [loding, setLoding] = useState<boolean>(true);

  // テキストボックで打ち込めれた値
  const [setInput, getInput] = useState<string>();

  // 削除ボタンの処理中のフラグ
  const [flag, setFlag] = useState<boolean>(true);

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

  // スプレットシートから全情報を取得
  useEffect(() => {
    // tureのときのみ動かす
    if (loding) {
      fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${NEXT_PUBLIC_GOOGLE_SHEETS_DOC_ID}/values/sheet1?key=${NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY}`
      )
        .then((res) => res.json())
        .then((datas) => {
          setAllProduct(CsvDic(datas.values));
        });

      getData();
    }

    setLoding(false);
    setFlag(true);
  }, [loding]);

  // menberIdで絞り込んだデータ取得
  const getData = () => {
    const sourceList = {
      sheetNo: 1,
      method: "GET",
      type: "getPrivateData",
      menberId: 1,
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
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserAllProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // データの削除
  const Delete = (menberId: string, itemId: string) => {
    setFlag(false);
    const sourceList = {
      sheetNo: 1,
      method: "GET",
      type: "deleteData",
      menberId: menberId,
      itemId: itemId,
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
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setLoding(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // データのアップデート
  const Update = (menberId: string, itemId: string) => {
    const sourceList = {
      sheetNo: 1,
      method: "GET",
      type: "UpDate",
      menberId: menberId,
      itemId: itemId,
      url: "https://sakura-checker.jp/search/B0BP3SHG5Z/",
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
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setLoding(true);
        setFlag(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // データの追加
  const addData = (url: string) => {
    // GAS側で data プロパティにアクセスしているため、
    // クライアントから送るデータにも data プロパティが必要。
    const sellNumber = AllProduct.length + 2;
    const sourceList = {
      sheetNo: 1,
      method: "POST",
      data: [
        {
          menberId: "1",
          itemId: `${sellNumber}`,
          parts: "",
          URL: `${url}`,
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
  };

  // スプレットシートにURLを送る
  const click = () => {
    const sakuraUrl = "https://sakura-checker.jp/";
    const amazonUrl = "https://www.amazon.co.jp/";

    if (setInput && setInput.indexOf(amazonUrl) !== -1) {
      const itemUrl = setInput.split("/");
      addData(`https://sakura-checker.jp/search/${itemUrl[5]}`);
      return;
    }

    if (setInput && setInput.indexOf(sakuraUrl) !== -1) {
      addData(setInput);
      return;
    }
  };

  // ドラックアンドドロップで移動後に値段
  const [sumPrice, setSumPrice] = useState<item[]>([]);

  let sum = 0;
  // 合計側に移動してきたときに合計金額を計算する
  useEffect(() => {
    sumPrice.forEach((item: item, index: number) => {
      sum = sum + Number(item.price);
    });
  }, [sumPrice]);

  //
  useEffect(() => {
    const menberId = sessionStorage.getItem("meberId");
    console.log(menberId);
    if (!menberId) {
      sessionStorage.setItem("menberId", "1");
    }
  }, []);

  //
  useEffect(() => {
    // Update("2", "5");
  }, []);

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
          <button onClick={() => click()}>送信</button>
        </div>
      </div>
      <button onClick={() => Update("2", "5")}>Update demo</button>
      <section className={styles.container}>
        <div className={styles.box}>
          <h2>商品一覧</h2>
          {userAllProduct
            .sort((x, y) => Number(x.itemId) - Number(y.itemId))
            .map((item: item, index: number) => (
              <div className={styles.itemBox} key={`${index}`}>
                <div className={styles.itemName}>
                  商品名：{item.productName}
                </div>
                <div>値段：{item.price}</div>
                <button
                  onClick={() => Delete(item.menberId, item.itemId)}
                  disabled={!flag}
                >
                  削除
                </button>
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
  // <ArrMapRender {...userAllProduct} />
  return (
    <>
      {itemArray.map((item: item, index: number) => (
        <div className={styles.itemBox}>
          <div className={styles.item}>商品名：{item.productName}</div>
          <div>値段：{item.price}</div>{" "}
        </div>
      ))}
    </>
  );
}
