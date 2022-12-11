import React from 'react';
import { StyledDisplay, StyledExpressionBuilder, StyledNumber } from './styled';

export const Display = () => {
  return (
    <StyledDisplay>
      <StyledExpressionBuilder>(0+1+2+3)</StyledExpressionBuilder>
      <StyledNumber>12</StyledNumber>
    </StyledDisplay>
  );
};
