import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export default Container;
