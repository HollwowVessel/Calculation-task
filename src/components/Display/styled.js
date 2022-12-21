import styled from "styled-components";

export const DisplayWrapper = styled.div`
  border-bottom: 2px solid #000;
  padding: 0 ${({ theme }) => theme.spaces[2]}px
    ${({ theme }) => theme.spaces[2]}px 0;
  margin-bottom: ${({ theme }) => theme.spaces[2]}px;
  font-size: ${({ theme }) => theme.fontSize[3]}px;
  text-align: right;
`;

export const ExpressionBuilder = styled.div`
  color: ${({ theme }) => theme.color};
  margin: 0 ${({ theme }) => theme.spaces[2]}px
    ${({ theme }) => theme.spaces[2]}px 0;
`;

export const Number = styled.div`
  color: ${({ theme }) => theme.expressionColor};
  font-size: ${({ theme }) => theme.fontSize[0]}px;
  margin: 0 0 ${({ theme }) => theme.spaces[1]} 0;
`;
