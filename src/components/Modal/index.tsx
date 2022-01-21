import Container from "./style";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <Container>
      <div className="div_modal">{children}</div>
    </Container>
  );
};

export default Modal;
