import React from 'react';
import { StyledHistoryContainer, StyledHistoryItems } from '../styled';
import { array } from 'prop-types';

export const History = ({ historyItems }) => {
  const historyInfo = historyItems.map((el, id) => (
    <li key={id}>{el.join('')}</li>
  ));
  console.log(historyInfo);

  return (
    <StyledHistoryContainer id='historyContainer'>
      <h2>History</h2>
      <StyledHistoryItems id='history'>{historyInfo}</StyledHistoryItems>
    </StyledHistoryContainer>
  );
};

History.propTypes = {
  historyItems: array.isRequired,
};
