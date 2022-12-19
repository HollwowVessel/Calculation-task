import styled from "styled-components";

export const DisplayWrapper = styled.div`
  border-bottom: 2px solid #000;
  padding: 0 20px 10px 0;
  margin: 0 0 10px 0;
  font-size: 40px;
  text-align: right;
`;

export const ExpressionBuilder = styled.div`
  color: ${({ theme }) => theme.color};
  margin: 0 10px 10px 0;
`;

export const Number = styled.div`
  color: ${({ theme }) => theme.expressionColor};
  font-size: 20px;
  margin: 0 0 5px 0;
`;