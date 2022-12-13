import { func } from 'prop-types';
import React from 'react';
import { StyledShowHistoryButton } from '../styled';

export const ControlPanel = ({ handleHistory }) => {
  return (
    <StyledShowHistoryButton onClick={handleHistory} id='show-history'>
      Show
    </StyledShowHistoryButton>
  );
};

ControlPanel.propTypes = {
  handleHistory: func.isRequired,
};
