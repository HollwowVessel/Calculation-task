import { buttonValues } from "constants/keys";
import { func } from "prop-types";
import React from "react";

import { KeypadContainer, StyledButton } from "../styled";

export function Keypad({ handleValue }) {
  return (
    <KeypadContainer>
      {buttonValues.map((el) => (
        <StyledButton key={el} onClick={handleValue} value={el} type="button" />
      ))}
    </KeypadContainer>
  );
}

Keypad.propType = {
  handleValue: func,
};
