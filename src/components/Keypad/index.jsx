import React from 'react';
import { buttonValues } from './mock';
import { KeypadContainer, StyledButton } from './styled';

export const Keypad = ({ handleValue }) => {
  const btns = buttonValues.map((el) => (
    <StyledButton key={el} onClick={handleValue} value={el} type='button' />
  ));
  return <KeypadContainer>{btns}</KeypadContainer>;
};
