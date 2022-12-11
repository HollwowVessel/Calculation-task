import React, { useState } from 'react';

import { History } from 'components/History';
import { Layout } from 'components/Layout';
import { StyledCalculatorContainer } from './styled';

export const Calculator = () => {
  const [historyItems, setHistoryItems] = useState([]);
  return (
    <StyledCalculatorContainer>
      <Layout setHistoryItems={setHistoryItems} />
      <History historyItems={historyItems} />
    </StyledCalculatorContainer>
  );
};
