import { func } from "prop-types";
import React from "react";

import { ShowHistoryButton } from "../styled";

export function ControlPanel({ handleHistory }) {
  return (
    <ShowHistoryButton onClick={handleHistory} id="show-history">
      Show
    </ShowHistoryButton>
  );
}

ControlPanel.propTypes = {
  handleHistory: func.isRequired,
};
