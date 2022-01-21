import styled, { css, keyframes } from "styled-components";

interface InputContainerProps {
  error: boolean;
}

export const slideToLeft = keyframes`
  from{
    transform:translateX(-200px);
    opacity:0;
  }
  to{
    transform:translateX(0px);
    opacity:1;
  }
`;

export const Container = styled.div`
  width: 320px;
  height: 461px;
  background: #ffffff;
  border: 2px solid #f5f5f5;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  @media (min-width: 400px) {
    width: 383px;
  }
  @media (min-width: 900px) {
    margin-right: 40px;
    animation: ${slideToLeft} 1s ease-in-out;
    width: 500px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
  h1 {
    margin: 0px;
    margin-bottom: 10px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
    width: 290px;
    @media (min-width: 400px) {
      width: 345px;
    }
    @media (min-width: 900px) {
      width: 452px;
    }
  }
  .div_menssage {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #999999;
    height: 60px;
    width: 327px;
  }
`;

export const Errors = styled.span`
  color: #f95959;
  font-size: 12px;
`;
export const InputContainer = styled.div<InputContainerProps>`
  ${(props) =>
    props.error
      ? css`
          margin-bottom: 2px;
        `
      : css`
          margin-bottom: 20px;
        `}
`;
