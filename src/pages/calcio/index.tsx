import { Root2, cardData, cardInfo, menuInfo, data2 } from "@util/data";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [list, setList] = useState<cardInfo[]>([]);
  const [menuList, setMenuList] = useState<Root2[]>([]);
  const [cardData, setCardData] = useState<cardData>(data2);
  const [get, set] = useState<boolean>(false);

  const checkbox = (card: cardInfo) => {
    const newCardData = cardData.map((cardInfos) => {
      const idx = cardInfos.findIndex(
        (cardInfo) => cardInfo.value == card.value
      );
      if (idx != -1) {
        cardInfos[idx].status = !card.status;
        changList(cardInfos[idx]);
      }

      return cardInfos;
    });
    makeList();
    setCardData(newCardData);
  };

  const allCheckChang = (status: boolean) => {
    const newList: cardInfo[] = [];
    const newCardData = cardData.map((cardInfos) => {
      cardInfos.map((cardInfo) => {
        cardInfo.status = status;
        if (!status) {
          setList([]);
        } else {
          newList.push(cardInfo);
        }
      });
      return cardInfos;
    });
    setList(newList);
    setCardData(newCardData);
  };

  const changList = (card: cardInfo) => {
    const newList: cardInfo[] = [...list];
    if (card.status) {
      newList.push(card);
      setList(newList);
    } else {
      const newList = list.filter((n) => n.value != card.value);
      setList(newList);
    }
  };

  const makeList = () => {
    console.log(list);

    if (list.length == 0) {
      setMenuList([]);
      return;
    }
    const menuListData: Root2[] = [];
    list.forEach((card1: cardInfo, i) => {
      list.forEach((card2: cardInfo, j) => {
        const select = menuInfo.find(
          (menu) =>
            menu.card1 == card1.value &&
            menu.card2 == card2.value &&
            menu.card3 == ""
        );
        if (select != undefined) {
          menuListData.push(select);
        }

        list.forEach((card3: cardInfo, j) => {
          const select = menuInfo.find(
            (menu) =>
              menu.card1 == card1.value &&
              menu.card2 == card2.value &&
              menu.card3 == card3.value
          );
          if (select != undefined) {
            menuListData.push(select);
          }
        });
      });
    });

    setMenuList(menuListData);
  };

  useEffect(() => {
    makeList();
  }, [list]);

  return (
    <div>
      <button onClick={() => allCheckChang(true)}>全て埋める</button>
      <button onClick={() => allCheckChang(false)}>全て外す</button>
      <div style={{ display: "flex" }}>
        {cardData.map((cardInfo, i) => (
          <div key={`key_` + i}>
            {cardInfo.map((card, j) => (
              <div
                style={{ display: "flex" }}
                key={`key_` + j}
                onClick={() => checkbox(card)}
              >
                <input
                  type="checkbox"
                  value={card.value}
                  onChange={() => {}}
                  checked={card.status}
                />
                {card.value}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "20px" }}>
          <h2>選択したメニュー</h2>
          {list.map((card, i) => (
            <div style={{ display: "flex" }} key={`key_` + i}>
              {card.value}
            </div>
          ))}
        </div>
        <div>
          <div style={{ margin: "40px" }}>
            <h2>スペシャルメニュー</h2>
          </div>
          <div style={{ display: "flex", margin: "30px" }} key={`key_`}>
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
                {menuList.map((card, i) => (
                  <tr key={i}>
                    <td>{card.menu}</td>
                    <td>{card.kick}</td>
                    <td>{card.speed}</td>
                    <td>{card.energy}</td>
                    <td>{card.technique}</td>
                    <td>{card.physical}</td>
                    <td>{card.jump}</td>
                    <td>{card.mental}</td>
                    <td>{card.Fatigue}</td>
                    <td>{card.type1}</td>
                    <td>{card.type2}</td>
                    <td>{card.type3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
