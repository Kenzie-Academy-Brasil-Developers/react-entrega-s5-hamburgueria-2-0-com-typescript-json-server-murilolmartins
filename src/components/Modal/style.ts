import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  .div_modal {
    background-color: white;
    width: 320px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    align-items: center;
    @media (min-width: 500px) {
      width: 500px;
    }
  }
`;

export default Container;
