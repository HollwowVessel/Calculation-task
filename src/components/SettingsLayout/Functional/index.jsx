import React from 'react';
import { Select } from 'components/Select/Functional';
import {
  SettingsLayoutContainer,
  StyledClearHistory,
  StyledSettingsName,
} from '../styled';
import { func, object } from 'prop-types';

export const SettingsLayout = ({ setTheme, clearAll, theme }) => {
  return (
    <SettingsLayoutContainer>
      <StyledSettingsName>Settings</StyledSettingsName>
      <Select setTheme={setTheme} theme={theme} />
      <StyledClearHistory onClick={clearAll} id='history-clear'>
        Clear All History
      </StyledClearHistory>
    </SettingsLayoutContainer>
  );
};

SettingsLayout.propTypes = {
  theme: object.isRequired,
  setTheme: func.isRequired,
  clearAll: func.isRequired,
};
