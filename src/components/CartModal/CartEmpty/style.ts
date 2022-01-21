import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 158px;
  padding: 50px 20px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  border-radius: 0px 0px 5px 5px;
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #333333;
      width: 320px;
      height: 40px;
      @media (min-width: 500px) {
        width: 342px;
      }
    }
    span {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      color: #828282;
      width: 320px;
      height: 24px;
      @media (min-width: 500px) {
        width: 345px;
      }
    }
  }
`;

export default Container;
