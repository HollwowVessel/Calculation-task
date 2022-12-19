import React from "react";

import { DisplayWrapper, ExpressionBuilder, Number } from "../styled";

export function Display({ displayState }) {
  return (
    <DisplayWrapper>
      <Number id="number">
        {displayState.expression} {displayState.operation}
      </Number>
      <ExpressionBuilder id="expression">
        {displayState.number}
      </ExpressionBuilder>
    </DisplayWrapper>
  );
}

Display.propTypes = {};
