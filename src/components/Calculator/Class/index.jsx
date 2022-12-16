import React from 'react';

import { History } from 'components/History/Class';
import { Layout } from 'components/Layout/Class';
import { StyledCalculatorContainer } from '../styled';
import { ControlPanel } from 'components/ControlPanel/Class';
import { getHistory } from 'utils/localStorage';

export class Calculator extends React.Component {
  constructor() {
    super();
    console.log(getHistory());
    this.state = {
      showHistory: false,
      historyItems: getHistory()?.reverse() || [],
    };
  }

  handleHistory = () => {
    this.setState((prev) => ({ ...prev, showHistory: !prev.showHistory }));
  };

  changeHistory = () => {
    this.setState((prev) => ({
      ...prev,
      historyItems: getHistory().reverse(),
    }));
  };

  render() {
    const { showHistory, historyItems } = this.state;
    return (
      <StyledCalculatorContainer>
        <Layout changeHistory={this.changeHistory} />
        <ControlPanel handleHistory={this.handleHistory} />
        {showHistory && <History id='history' historyItems={historyItems} />}
      </StyledCalculatorContainer>
    );
  }
}
