import styled from "styled-components";

export const CalculatorContainer = styled.div`
  display: flex;
  height: ${({ theme }) => theme.height[6]}vh;
  padding-top: ${({ theme }) => theme.spaces[4]}px;
  background: ${({ theme }) => theme.background};
`;

export const LayoutContainer = styled.div`
  width: ${({ theme }) => theme.width[4]}vw;
  margin-left: ${({ theme }) => theme.spaces[5]}px;
  height: auto;
`;
