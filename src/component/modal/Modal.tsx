import { FC, ReactNode } from "react";

import styles from "./modal.module.scss";
//　モーダル要素
type ModalType = {
  children: ReactNode;
  modalClick: (event: any) => void;
  readComplete?: boolean;
};
const Modal: FC<ModalType> = ({ children, modalClick, readComplete }) => {
  console.log(readComplete);

  return (
    <>
      <div className={styles.modal_content}>
        {readComplete === undefined || readComplete ? (
          <>{children}</>
        ) : (
          <p className={styles.loading}>loading...</p>
        )}{" "}
        <div className={styles.close_btn} onClick={modalClick}>
          閉じる
        </div>
      </div>

      <div className={styles.overlay} onClick={modalClick}></div>
    </>
  );
};

export default Modal;
