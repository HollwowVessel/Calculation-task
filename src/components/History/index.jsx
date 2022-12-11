import React from 'react';
import { ControlPanel } from '@/components/ControlPanel';
import { StyledHistoryContainer } from './styled';
import { calc } from '@/utils/commandPattern';

export const History = () => {
  const historyInfo = calc.history?.map((el) => el.join(' '));
  return (
    <StyledHistoryContainer>
      <h2>History</h2>
      <ControlPanel />
      {historyInfo}
    </StyledHistoryContainer>
  );
};
