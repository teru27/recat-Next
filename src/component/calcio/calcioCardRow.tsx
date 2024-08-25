import { card } from "@util/types";
import React, { FC } from "react";

import styles from "./calcioCardRow.module.scss";

type calcioCardRow = {
  cardData: card[];
  clickEvent: (cardData: card) => void;
};

export const CalcioCardRow: FC<calcioCardRow> = (props) => {
  const { cardData, clickEvent } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>カード名</th>
          <th>枚数</th>
        </tr>
        {cardData.map((card, idx) => (
          <tr key={idx}>
            <td>{card.name}</td>
            <td>{card.count}</td>
            <td onClick={() => clickEvent(card)}>+</td>
            <td onClick={() => clickEvent(card)}>-</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
