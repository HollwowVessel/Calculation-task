import React from 'react';
import { Select } from 'components/Select';
import {
  SettingsLayoutContainer,
  StyledClearHistory,
  StyledSettingsName,
} from './styled';

export const SettingsLayout = ({ setTheme, clearTheme, theme }) => {
  return (
    <SettingsLayoutContainer>
      <StyledSettingsName>Settings</StyledSettingsName>
      <Select setTheme={setTheme} theme={theme} />
      <StyledClearHistory onClick={clearTheme}>
        Clear all history
      </StyledClearHistory>
    </SettingsLayoutContainer>
  );
};
