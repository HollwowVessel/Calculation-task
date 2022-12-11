import React from 'react';
import { StyledShowHistoryButton } from './styled';

export const ControlPanel = ({ handleHistory }) => {
  return (
    <StyledShowHistoryButton onClick={handleHistory}>
      Show
    </StyledShowHistoryButton>
  );
};
