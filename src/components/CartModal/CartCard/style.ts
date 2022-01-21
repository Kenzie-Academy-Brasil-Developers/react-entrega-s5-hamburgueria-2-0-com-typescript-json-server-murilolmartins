import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 15px 0px 5px 0px;
  width: 300px;
  @media (min-width: 500px) {
    width: 452px;
  }
  .img_cart {
    background: #e0e0e0;
    border-radius: 5px;
    width: 82.26px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 55px;
      height: 53.49px;
    }
  }
  .small_container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-around;
    margin-left: 15px;
    .header_card_cart {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      h1 {
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 0px;
        color: #333333;
        margin: 0px;
      }
      svg {
        font-size: 18px;
        color: #bdbdbd;
      }
    }
    .count_container {
      display: flex;
      width: 106.56px;
      button {
        width: 30.44px;
        height: 34px;
        background: #f2f2f2;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 16px;
        color: #eb5757;
        border: none;
      }
      .count {
        flex-grow: 1;
        height: 34px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border: 1px solid #f2f2f2;
        span {
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          color: #000000;
        }
      }
    }
  }
`;

export default Container;
