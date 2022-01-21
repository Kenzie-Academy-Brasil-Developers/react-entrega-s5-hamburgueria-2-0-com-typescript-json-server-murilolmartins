import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border-top: 2px solid #e0e0e0;
  margin: 10px 0px;

  button {
    @media (min-width: 400px) {
      width: 300px;
    }
  }
  @media (min-width: 500px) {
    width: 452px;
    button {
      width: 452px;
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    h2 {
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #333333;
    }
    span {
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #828282;
    }
  }
`;

export default Container;
