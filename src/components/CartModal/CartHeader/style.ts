import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 22px;
  width: 100%;
  height: 54px;
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;
  box-sizing: border-box;
  h1 {
    margin: 0px;
    color: white;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
  }
  svg {
    font-size: 20px;
  }
`;

export default Container;
