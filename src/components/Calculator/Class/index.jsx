import React from 'react';

import { History } from 'components/History/Class';
import { Layout } from 'components/Layout/Class';
import { StyledCalculatorContainer } from '../styled';
import { getHistory } from 'utils/localStorage';

export class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { historyItems: getHistory().reverse() };
  }

  changeHistory = () => {
    this.setState({ historyItems: getHistory().reverse() });
  };

  render() {
    return (
      <StyledCalculatorContainer>
        <Layout setHistoryItems={this.changeHistory} />
        <History historyItems={this.state.historyItems} />
      </StyledCalculatorContainer>
    );
  }
}
