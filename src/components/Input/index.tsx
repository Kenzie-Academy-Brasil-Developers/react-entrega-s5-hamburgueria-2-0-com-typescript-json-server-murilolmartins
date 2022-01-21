import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";

import { Container, InputContainer } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error = false, ...rest },
  ref
) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer {...rest} ref={ref} error={error}></InputContainer>
    </Container>
  );
};

export const Input = forwardRef(InputBase);
