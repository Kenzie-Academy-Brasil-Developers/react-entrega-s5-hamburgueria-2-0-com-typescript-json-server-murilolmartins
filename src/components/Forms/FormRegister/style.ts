import styled, { css, keyframes } from "styled-components";

interface InputContainerProps {
  error: boolean;
}

export const slideToRight = keyframes`
  from{
    transform:translateX(200px);
    opacity:0;
  }
  to{
    transform:translateX(0px);
    opacity:1;
  }
`;

export const Container = styled.div`
  width: 320px;
  height: 527px;
  background: #ffffff;
  border: 2px solid #f5f5f5;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 400px) {
    width: 383px;
  }
  @media (min-width: 900px) {
    margin-right: 40px;
    animation: ${slideToRight} 1s ease-in-out;
    width: 500px;
    margin-left: 40px;
  }
  .heading_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 290px;
    @media (min-width: 400px) {
      width: 345px;
    }
    @media (min-width: 900px) {
      width: 452px;
    }
    h1 {
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #333333;
    }
    a {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      text-decoration-line: underline;
      color: #828282;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  ${(props) =>
    props.error
      ? css`
          margin-bottom: 7px;
        `
      : css`
          margin-bottom: 20px;
        `}
`;

export const Errors = styled.div`
  color: #f95959;
  font-size: 12px;
`;
