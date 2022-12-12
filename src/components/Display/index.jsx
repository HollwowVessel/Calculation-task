import React from 'react';
import { StyledDisplay, StyledExpressionBuilder, StyledNumber } from './styled';

export const Display = ({ number, expression, operation }) => {
  return (
    <StyledDisplay>
      <StyledNumber>
        {expression} {operation}
      </StyledNumber>
      <StyledExpressionBuilder>{number}</StyledExpressionBuilder>
    </StyledDisplay>
  );
};
