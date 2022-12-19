import React from "react";

import {
  StyledDisplay,
  StyledExpressionBuilder,
  StyledNumber,
} from "../styled";

export function Display({ displayState }) {
  return (
    <StyledDisplay>
      <StyledNumber id="number">
        {displayState.expression} {displayState.operation}
      </StyledNumber>
      <StyledExpressionBuilder id="expression">
        {displayState.number}
      </StyledExpressionBuilder>
    </StyledDisplay>
  );
}

Display.propTypes = {};
