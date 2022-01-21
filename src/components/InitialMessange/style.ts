import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (min-width: 900px) {
    margin-bottom: 0px;
  }
  .img_container {
    width: 243.43px;
    height: 56.4px;
    img {
      width: 100%;
    }
  }
  .messange_container {
    width: 320px;
    height: 95px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (min-width: 400px) {
      width: 383px;
    }
    .icon_container {
      width: 60px;
      height: 60px;
      background: rgba(39, 174, 96, 0.1);
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 20px;
        color: #27ae60;
      }
    }
    .text_container {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 22px;
      color: #828282;
      width: 230px;
      height: 66px;
      @media (min-width: 400px) {
        font-size: 14px;
        width: 273px;
      }
      span {
        color: black;
      }
      p {
        margin: 0px;
      }
    }
  }
  .pontos_container {
    margin-top: 30px;
    display: none;
    @media (min-width: 900px) {
      display: initial;
    }
  }
`;

export default Container;
