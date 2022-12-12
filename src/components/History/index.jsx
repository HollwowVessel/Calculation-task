import React, { useState } from 'react';
import { ControlPanel } from 'components/ControlPanel';
import { StyledHistoryContainer, StyledHistoryItems } from './styled';
import { array } from 'prop-types';

export const History = ({ historyItems }) => {
  const [showHistory, setShowHistory] = useState(false);

  const handleHistory = function () {
    setShowHistory((prev) => !prev);
  };

  const historyInfo = historyItems.map((el, id) => (
    <li key={id}>{el.join(' ')}</li>
  ));

  return (
    <StyledHistoryContainer>
      <h2>History</h2>
      <ControlPanel handleHistory={handleHistory} />
      <StyledHistoryItems>{showHistory && historyInfo}</StyledHistoryItems>
    </StyledHistoryContainer>
  );
};

History.propTypes = {
  historyItems: array,
};
