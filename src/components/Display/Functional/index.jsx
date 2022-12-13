import React from 'react';
import { string } from 'prop-types';
import {
  StyledDisplay,
  StyledExpressionBuilder,
  StyledNumber,
} from '../styled';

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

Display.propTypes = {
  number: string.isRequired,
  expression: string.isRequired,
  operation: string.isRequired,
};
