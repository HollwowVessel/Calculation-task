import styled from "styled-components";

export const CalculatorContainer = styled.div`
  display: flex;
  height: 91vh;
  padding: 20px 0 0 0;
  background: ${({ theme }) => theme.background};
`;

export const LayoutContainer = styled.div`
  width: 100vw;
  margin: 0 40px 0 0;
  height: auto;
`;
