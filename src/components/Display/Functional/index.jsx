import React from 'react';
import { string } from 'prop-types';
import {
  StyledDisplay,
  StyledExpressionBuilder,
  StyledNumber,
} from '../styled';

export const Display = ({ number, expression, operation, displayState }) => {
  return (
    <StyledDisplay>
      <StyledNumber>
        {displayState.expression} {displayState.operation}
      </StyledNumber>
      <StyledExpressionBuilder>{displayState.number}</StyledExpressionBuilder>
    </StyledDisplay>
  );
};

Display.propTypes = {
  number: string.isRequired,
  expression: string.isRequired,
  operation: string.isRequired,
};
