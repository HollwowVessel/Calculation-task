import { buttonValues } from "constants/keys";
import { func } from "prop-types";
import React from "react";

import { Button, KeypadContainer } from "../styled";

export function Keypad({ handleValue }) {
  return (
    <KeypadContainer>
      {buttonValues.map((el) => (
        <Button key={el} onClick={handleValue} value={el} type="button" />
      ))}
    </KeypadContainer>
  );
}

Keypad.propType = {
  handleValue: func,
};
