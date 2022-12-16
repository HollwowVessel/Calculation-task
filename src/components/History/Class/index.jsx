import React from 'react';

import { StyledHistoryContainer, StyledHistoryItems } from '../styled';
import { array } from 'prop-types';

export class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHistory: false,
    };
  }

  render() {
    const { historyItems } = this.props;
    console.log(historyItems);
    const historyInfo = historyItems.map((el, id) => (
      <li key={id}>{el.join(' ')}</li>
    ));

    return (
      <StyledHistoryContainer id='historyContainer'>
        <h2>History</h2>
        <StyledHistoryItems id='history'>{historyInfo}</StyledHistoryItems>
      </StyledHistoryContainer>
    );
  }
}

History.propTypes = {
  historyItems: array.isRequired,
};
