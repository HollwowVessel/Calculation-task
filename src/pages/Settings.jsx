import React from 'react';
import { GlobalStyles } from '@/theme';
import { SettingsLayout } from 'components/SettingsLayout';

const Settings = ({ setTheme, clearTheme, theme }) => {
  return (
    <div>
      <GlobalStyles />
      <SettingsLayout
        setTheme={setTheme}
        clearTheme={clearTheme}
        theme={theme}
      />
    </div>
  );
};

export { Settings };
