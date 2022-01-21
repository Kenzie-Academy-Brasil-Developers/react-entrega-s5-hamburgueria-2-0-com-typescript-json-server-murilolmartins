import styled, { css } from "styled-components";

interface ContainerProps {
  isSearch: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  background: #f5f5f5;
  width: 100vw;
  height: 80px;
  justify-content: center;
  align-items: center;
  .small_container {
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo_container {
      padding: 10px;
      cursor: pointer;
      img {
        ${(props) =>
          props.isSearch &&
          css`
            width: 100px;
            @media (min-width: 370px) {
              width: 150px;
            }
          `}
      }
    }
  }

  .options_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    @media (min-width: 630px) {
      width: 500px;
    }

    .cart_container {
      position: relative;
      ${(props) =>
        props.isSearch &&
        css`
          display: none;
        `}
      .count {
        position: absolute;
        width: 20px;
        height: 24px;
        left: 22px;
        top: -11px;
        background: #27ae60;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }

      svg {
        font-size: 30px;
        color: #bdbdbd;
        ${(props) =>
          props.isSearch &&
          css`
            display: none;
          `}
      }
    }
    svg {
      font-size: 30px;
      color: #bdbdbd;
      ${(props) =>
        props.isSearch &&
        css`
          display: none;
        `}
    }
    @media (min-width: 630px) {
      .search {
        display: none;
      }
    }
  }
`;

export default Container;
