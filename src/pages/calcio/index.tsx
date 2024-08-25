import React, { useEffect, useState } from "react";

import { tanStackGetData } from "../../util/gas-api";
import { Todo, card, cardsType, menuDataType } from "../../util/types";

import styles from "./calcio.module.scss";
import { useQuery } from "@tanstack/react-query";
import { cardData, menuData } from "@component/calcio/calcioData";
import { CalcioCardRow } from "@component/calcio/calcioCardRow";

const menuDatas: menuDataType[] = menuData;

const cardDatas: cardsType = cardData;

export default function Home() {
  const [getCardDatas, setCardDatas] = useState<cardsType>(cardDatas);
  const [getMenuData, setMenuData] = useState<menuDataType[]>([]);
  const [getSelectCard, setSelectCard] = useState<string[]>([]);

  const addSelectCard = (card: card) => {
    if (!getSelectCard.includes(card.key)) {
      setSelectCard([...getSelectCard, card.key]);
    }

    // カウント上下操作予定
  };

  // 検索機能
  useEffect(() => {
    setMenuData(menuDatas);
    console.log(getSelectCard);
  }, [getSelectCard]);

  return (
    <div className={styles.main}>
      <h1>カード一覧</h1>
      <div className={styles.container}>
        <div className={styles.cardBox}>
          <CalcioCardRow
            cardData={getCardDatas.tactical}
            clickEvent={addSelectCard}
          />
        </div>
        <div className={styles.cardBox}>
          <CalcioCardRow
            cardData={getCardDatas.technical}
            clickEvent={addSelectCard}
          />
        </div>
        <div className={styles.cardBox}>
          <CalcioCardRow
            cardData={getCardDatas.physical}
            clickEvent={addSelectCard}
          />
        </div>
        <div className={styles.cardBox}>
          <CalcioCardRow
            cardData={getCardDatas.support}
            clickEvent={addSelectCard}
          />
        </div>
      </div>

      <h1>練習一覧</h1>

      <table border={1}>
        <tbody>
          <tr>
            <th>練習名</th>
            <th>キック</th>
            <th>スピード</th>
            <th>体力</th>
            <th>テクニック</th>
            <th>フィジカル</th>
            <th>ジャンプ</th>
            <th>メンタル</th>
            <th>疲労度</th>
            <th>タイプ1</th>
            <th>タイプ2</th>
            <th>タイプ3</th>
          </tr>
          {getMenuData.map((MenuData, idx) => (
            <tr key={idx}>
              <td>{MenuData.menu}</td>
              <td>{MenuData.kick}</td>
              <td>{MenuData.speed}</td>
              <td>{MenuData.energy}</td>
              <td>{MenuData.technique}</td>
              <td>{MenuData.physical}</td>
              <td>{MenuData.jump}</td>
              <td>{MenuData.mental}</td>
              <td>{MenuData.Fatigue}</td>
              <td>{MenuData.type1}</td>
              <td>{MenuData.type2}</td>
              <td>{MenuData.type3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
