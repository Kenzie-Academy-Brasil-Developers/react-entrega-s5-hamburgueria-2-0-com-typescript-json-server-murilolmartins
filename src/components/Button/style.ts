import styled, { css } from "styled-components";

interface ContainerProps {
  isLog: boolean;
}

const Container = styled.button<ContainerProps>`
  padding: 0px 40px;
  width: 290px;
  height: 60px;
  ${(props) =>
    props.isLog
      ? css`
          background: #219653;
        `
      : css`
          background: #f5f5f5;
        `}
  border-radius: 8px;
  ${(props) =>
    props.isLog
      ? css`
          color: white;
        `
      : css`
          color: lightgray;
        `}
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;

  @media (min-width: 400px) {
    width: 345px;
  }
  @media (min-width: 900px) {
    width: 452px;
  }
`;

export default Container;
