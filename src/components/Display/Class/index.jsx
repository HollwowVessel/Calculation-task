import React from 'react';
import { string } from 'prop-types';
import {
  StyledDisplay,
  StyledExpressionBuilder,
  StyledNumber,
} from '../styled';

export class Display extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { expression, operation, number } = this.props.displayState;
    console.log(expression, operation, number);
    return (
      <StyledDisplay>
        <StyledNumber>
          {expression} {operation}
        </StyledNumber>
        <StyledExpressionBuilder>{number}</StyledExpressionBuilder>
      </StyledDisplay>
    );
  }
}

Display.propTypes = {
  number: string.isRequired,
  expression: string.isRequired,
  operation: string.isRequired,
};
