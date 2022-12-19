import { SettingsLayout } from "components/SettingsLayout";
import React from "react";

export function Settings({ setTheme, clearAll, theme }) {
  return (
    <SettingsLayout setTheme={setTheme} clearAll={clearAll} theme={theme} />
  );
}
