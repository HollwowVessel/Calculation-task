import { array } from "prop-types";
import React from "react";

import { HistoryContainer, HistoryItems } from "../styled";

export class History extends React.Component {
  render() {
    const { historyItems } = this.props;

    return (
      <HistoryContainer id="historyContainer">
        <h2>History</h2>
        <HistoryItems id="history">
          {historyItems.map((el, id) => (
            <li key={id}>{el.join(" ")}</li>
          ))}
        </HistoryItems>
      </HistoryContainer>
    );
  }
}

History.propTypes = {
  historyItems: array.isRequired,
};
