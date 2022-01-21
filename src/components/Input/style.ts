import styled, { css } from "styled-components";

interface InputContainerProps {
  error: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    font-size: 14px;
    color: #999999;
    margin-bottom: 5px;
  }
`;
export const InputContainer = styled.input<InputContainerProps>`
  ${(props) =>
    props.error
      ? css`
          border: 2px solid #f95959;
        `
      : css`
          border: 2px solid #333333;
        `}
  box-sizing: border-box;
  border-radius: 8px;
  width: 290px;
  height: 60px;
  box-sizing: border-box;
  padding: 10px;
  @media (min-width: 400px) {
    width: 345px;
  }
  @media (min-width: 900px) {
    width: 452px;
  }
`;
