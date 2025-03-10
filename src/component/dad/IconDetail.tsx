import React, { FC } from "react";

import styles from "./iconDetail.module.scss";
import { IconSVGInfo } from "./iconSVGInfo";

type iconDetail = {
  total: number;
  top: number;
  under: number;
  x: number;
  y: number;
};

export const IconDetail: FC<iconDetail> = (props) => {
  const { total, top, under, x, y } = props;
  return (
    <div className={styles.main}>
      1
      <IconSVGInfo total={total} top={top} under={under} />
    </div>
  );
};
