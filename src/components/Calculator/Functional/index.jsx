import React, { useState } from 'react';

import { History } from 'components/History/Functional';
import { Layout } from 'components/Layout/Functional';
import { StyledCalculatorContainer } from '../styled';
import { getHistory } from 'utils/localStorage';

export const Calculator = () => {
  const [historyItems, setHistoryItems] = useState(getHistory());

  return (
    <StyledCalculatorContainer>
      <Layout setHistoryItems={setHistoryItems} />
      <History historyItems={historyItems} />
    </StyledCalculatorContainer>
  );
};
