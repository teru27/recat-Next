import React, { FC, useEffect, useState } from "react";

import CircleFilled from "src/assets/svg//CircleFilled.svg";
import Circle from "src/assets/svg/circle.svg";

import styles from "./gomokuRow.module.scss";

type GomokuSquareText = {
  square: number;
};

export const GomokuSquareText: FC<GomokuSquareText> = (props) => {
  const { square } = props;

  const ChangeSVG = (): JSX.Element => {
    switch (square) {
      case 1:
        return <Circle />;
      case 2:
        return <CircleFilled />;
      default:
        return <></>;
    }
  };

  return <>{ChangeSVG()}</>;
};
