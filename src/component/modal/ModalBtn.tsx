import { FC, ReactNode } from "react";

import styles from "./modal.module.scss";
//　モーダル要素
type ModalBtnType = {
  children: ReactNode;
  modalBtnName: string;
  modalClick: (event: any) => void;
};

const ModalBtn: FC<ModalBtnType> = ({ children, modalBtnName, modalClick }) => {
  return (
    <>
      <button
        className={styles.ModalBtnBody}
        name={modalBtnName}
        onClick={modalClick}
      >
        {children}
      </button>
    </>
  );
};

export default ModalBtn;
