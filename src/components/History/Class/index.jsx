import { array } from "prop-types";
import React from "react";

import {
  HistoryContainer,
  HistoryHeader,
  HistoryItem,
  HistoryItems,
} from "../styled";

export class History extends React.Component {
  render() {
    const { historyItems } = this.props;

    return (
      <HistoryContainer id="historyContainer">
        <HistoryHeader>History</HistoryHeader>
        <HistoryItems id="history">
          {historyItems.map((el, id) => (
            <HistoryItem key={id}>{el?.join(" ")}</HistoryItem>
          ))}
        </HistoryItems>
      </HistoryContainer>
    );
  }
}

History.propTypes = {
  historyItems: array.isRequired,
};
