import { array } from "prop-types";
import React from "react";

import { StyledHistoryContainer, StyledHistoryItems } from "../styled";

export class History extends React.Component {
  render() {
    const { historyItems } = this.props;

    return (
      <StyledHistoryContainer id="historyContainer">
        <h2>History</h2>
        <StyledHistoryItems id="history">
          {historyItems.map((el, id) => (
            <li key={id}>{el.join(" ")}</li>
          ))}
        </StyledHistoryItems>
      </StyledHistoryContainer>
    );
  }
}

History.propTypes = {
  historyItems: array.isRequired,
};
