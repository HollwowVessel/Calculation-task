import React from 'react';
import { GlobalStyles } from '@/theme';
import { SettingsLayout } from 'components/SettingsLayout';

export const Settings = ({ setTheme, clearAll, theme }) => {
  return (
    <div>
      <GlobalStyles />
      <SettingsLayout setTheme={setTheme} clearAll={clearAll} theme={theme} />
    </div>
  );
};
