import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SmallContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
  width: 320px;
  margin-top: 40px;
  @media (min-width: 500px) {
    width: 500px;
  }
  @media (min-width: 679px) {
    flex-wrap: wrap;
    width: 100%;
    max-width: 1400px;
    justify-content: center;
    overflow-x: initial;
  }
`;

// flex-wrap: wrap;
// width: 100%;
// max-width: 1400px;
