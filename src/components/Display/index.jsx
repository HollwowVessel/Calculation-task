import React from 'react';
import { StyledDisplay, StyledExpressionBuilder, StyledNumber } from './styled';

export const Display = ({ number, expression }) => {
  return (
    <StyledDisplay>
      <StyledNumber>{expression}</StyledNumber>
      <StyledExpressionBuilder>{number}</StyledExpressionBuilder>
    </StyledDisplay>
  );
};
