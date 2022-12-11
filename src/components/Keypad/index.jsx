import React from 'react';
import { buttonValues } from './mock';
import { KeypadContainer, StyledButton } from './styled';

export const Keypad = () => {
  const btns = buttonValues.map((el) => (
    <StyledButton key={el}>{el}</StyledButton>
  ));
  return <KeypadContainer>{btns}</KeypadContainer>;
};
