import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

type TypeModalPortal = {
  children: ReactNode;
};

const ModalPortal: FC<TypeModalPortal> = ({ children }) => {
  const target = document.body;
  return createPortal(children, target);
};

export default ModalPortal;
