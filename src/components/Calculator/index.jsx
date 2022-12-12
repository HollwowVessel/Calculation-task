import React, { useState } from 'react';

import { History } from 'components/History';
import { Layout } from 'components/Layout';
import { StyledCalculatorContainer } from './styled';
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
