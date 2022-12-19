import { array } from "prop-types";
import React from "react";

import { StyledHistoryContainer, StyledHistoryItems } from "../styled";

export function History({ historyItems }) {
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

History.propTypes = {
  historyItems: array.isRequired,
};
