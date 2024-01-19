import React, { FC, useEffect, useState } from "react";
import { GomokuSquareText } from "./GomokuSquareText";

import styles from "./gomokuRow.module.scss";

type GomokuRow = {
  indexI: number;
  squares: number[];
  clickEvent: (i: number, j: number, square: number) => void;
};

export const GomokuRow: FC<GomokuRow> = (props) => {
  const { indexI, squares, clickEvent } = props;
  console.log(squares);
  return (
    <>
      {squares.map((square, j) => (
        <div
          key={`key_${j}`}
          className={styles.square}
          onClick={() => clickEvent(indexI, j, square)}
        >
          <div className={styles.squareText}>
            <GomokuSquareText square={square} />
          </div>
        </div>
      ))}
    </>
  );
};
