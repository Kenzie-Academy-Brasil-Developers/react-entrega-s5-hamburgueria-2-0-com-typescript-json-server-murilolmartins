import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export default Container;
