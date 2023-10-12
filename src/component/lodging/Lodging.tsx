import { FC } from "react";

import { InfinitySpin, TailSpin } from "react-loader-spinner";
import styles from "./lodging.module.scss";

export const Lodging: FC = () => {
  return (
    <>
      <div className={styles.lodging_spinner}>
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};
