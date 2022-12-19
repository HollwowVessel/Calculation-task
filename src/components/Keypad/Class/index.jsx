import { buttonValues } from "constants/keys";
import { func } from "prop-types";
import React from "react";

import { KeypadContainer, StyledButton } from "../styled";

export class Keypad extends React.Component {
  render() {
    const { handleValue } = this.props;

    return (
      <KeypadContainer>
        {buttonValues.map((el) => (
          <StyledButton
            key={el}
            onClick={handleValue}
            value={el}
            type="button"
          />
        ))}
      </KeypadContainer>
    );
  }
}

Keypad.propType = {
  handleValue: func,
};
