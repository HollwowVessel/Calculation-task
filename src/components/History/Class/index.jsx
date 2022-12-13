import React from 'react';
import { ControlPanel } from 'components/ControlPanel/Class';
import { StyledHistoryContainer, StyledHistoryItems } from '../styled';
import { array } from 'prop-types';

export class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showHistory: false };
  }

  handleHistory = () => {
    this.setState((prev) => ({ ...prev, showHistory: !prev.showHistory }));
  };

  render() {
    const { historyItems } = this.props;
    const historyInfo = historyItems.map((el, id) => (
      <li key={id}>{el.join(' ')}</li>
    ));

    return (
      <StyledHistoryContainer>
        <h2>History</h2>
        <ControlPanel handleHistory={this.handleHistory} />
        <StyledHistoryItems>
          {this.state.showHistory && historyInfo}
        </StyledHistoryItems>
      </StyledHistoryContainer>
    );
  }
}

History.propTypes = {
  historyItems: array.isRequired,
};
