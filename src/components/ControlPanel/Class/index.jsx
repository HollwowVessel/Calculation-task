import { func } from "prop-types";
import React from "react";

import { ShowHistoryButton } from "../styled";

export class ControlPanel extends React.Component {
  render() {
    const { handleHistory } = this.props;
    return (
      <ShowHistoryButton onClick={handleHistory} id="show-history">
        Show
      </ShowHistoryButton>
    );
  }
}

ControlPanel.propTypes = {
  handleHistory: func.isRequired,
};
