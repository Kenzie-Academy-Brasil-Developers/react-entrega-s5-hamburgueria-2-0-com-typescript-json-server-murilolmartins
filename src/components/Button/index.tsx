import { ButtonHTMLAttributes, ReactNode } from "react";
import Container from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLog: boolean;
}

const Button = ({ children, isLog = true, ...rest }: ButtonProps) => {
  return (
    <Container isLog={isLog} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
