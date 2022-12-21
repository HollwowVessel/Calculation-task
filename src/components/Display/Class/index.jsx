import { string } from "prop-types";
import React from "react";

import { DisplayWrapper, ExpressionBuilder, Number } from "../styled";

export class Display extends React.Component {
  render() {
    const { expression, operation, number } = this.props.displayState;

    return (
      <DisplayWrapper>
        <Number id="number">
          {expression} {operation}
        </Number>
        <ExpressionBuilder id="expression">{number}</ExpressionBuilder>
      </DisplayWrapper>
    );
  }
}

Display.propTypes = {
  number: string.isRequired,
  expression: string.isRequired,
  operation: string.isRequired,
};
