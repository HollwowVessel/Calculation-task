import { func } from 'prop-types';
import React from 'react';
import { buttonValues } from '../mock';
import { KeypadContainer, StyledButton } from '../styled';

export class Keypad extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleValue } = this.props;
    const btns = buttonValues.map((el) => (
      <StyledButton key={el} onClick={handleValue} value={el} type='button' />
    ));
    return <KeypadContainer>{btns}</KeypadContainer>;
  }
}

Keypad.propType = {
  handleValue: func,
};
