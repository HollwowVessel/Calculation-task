import { string } from "prop-types";
import React from "react";

import {
  StyledDisplay,
  StyledExpressionBuilder,
  StyledNumber,
} from "../styled";

export class Display extends React.Component {
  render() {
    const { expression, operation, number } = this.props.displayState;

    return (
      <StyledDisplay>
        <StyledNumber id="number">
          {expression} {operation}
        </StyledNumber>
        <StyledExpressionBuilder id="expression">
          {number}
        </StyledExpressionBuilder>
      </StyledDisplay>
    );
  }
}

Display.propTypes = {
  number: string.isRequired,
  expression: string.isRequired,
  operation: string.isRequired,
};
