import styled, { css } from "styled-components";

interface ContainerProps {
  isSearch: boolean;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: 365px;
  height: 60px;
  ${(props) =>
    props.isSearch
      ? css`
          display: initial;
        `
      : css`
          display: none;
        `}
  @media (min-width: 630px) {
    display: initial;
  }

  input {
    background: #ffffff;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #e0e0e0;
  }

  button {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    width: 53px;
    height: 40px;
    background: #27ae60;
    border: 2px solid #27ae60;
    box-sizing: border-box;
    border-radius: 8px;
    top: 17%;
    right: 4%;
    .icon_container {
      svg {
        font-size: 20px;
        color: #ffff;
        display: initial;
      }
    }
  }
`;

export default Container;
