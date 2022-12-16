import React, { useState } from 'react';

import { History } from 'components/History/Functional';
import { Layout } from 'components/Layout/Functional';
import { StyledCalculatorContainer } from '../styled';
import { getHistory } from 'utils/localStorage';
import { ControlPanel } from 'components/ControlPanel/Functional';

export const Calculator = () => {
  const [historyItems, setHistoryItems] = useState(
    getHistory().reverse() || [],
  );

  const [showHistory, setShowHistory] = useState(false);

  const handleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <StyledCalculatorContainer>
      <Layout setHistoryItems={setHistoryItems} />
      <ControlPanel handleHistory={handleHistory} />
      {showHistory && <History historyItems={historyItems} />}
    </StyledCalculatorContainer>
  );
};
