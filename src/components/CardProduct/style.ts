import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 346px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-bottom: 20px;
  margin-right: 15px;
  @media (min-width: 599px) {
    margin-right: 40px;
  }
  :hover {
    border: 2px solid #27ae60;
  }
  .img_container {
    width: 296px;
    height: 150px;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    img {
      width: 177px;
      height: 177px;
    }
  }
  .data_container {
    h1 {
      width: 260px;
      height: 40px;
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #333333;
      margin: 0px;
    }
    .description_container {
      p {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #828282;
        width: 260px;
        height: 16px;
      }
      span {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #27ae60;
        width: 260px;
        height: 24px;
      }
    }
    button {
      padding: 0px 20px;
      width: 106px;
      height: 40px;
      background: #27ae60;
      border: 2px solid #27ae60;
      box-sizing: border-box;
      border-radius: 8px;
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      margin-top: 10px;
    }
  }
`;

export default Container;
