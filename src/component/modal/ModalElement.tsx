import { FC, ReactNode } from "react";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

type ModalElementType = {
  children: ReactNode;
  targetName: string;
  modalOpen: boolean;
  modalName: string;
  modalClick: (event: any) => void;
  readComplete?: boolean;
};

//　モーダル外枠
const ModalElement: FC<ModalElementType> = ({
  children,
  targetName,
  modalOpen,
  modalName,
  modalClick,
  readComplete,
}) => {
  return (
    <>
      {modalOpen && modalName === targetName ? (
        <ModalPortal>
          <Modal modalClick={modalClick} readComplete={readComplete}>
            {children}
          </Modal>
        </ModalPortal>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalElement;
