import { SelectMenu } from "components/SelectMenu";
import React from "react";
import { clearHistory } from "utils/localStorage";

import { ClearHistory, SettingsLayoutContainer, SettingsName } from "./styled";

export function SettingsLayout() {
  return (
    <SettingsLayoutContainer>
      <SettingsName>Settings</SettingsName>
      <SelectMenu />
      <ClearHistory onClick={clearHistory} id="history-clear">
        Clear All History
      </ClearHistory>
    </SettingsLayoutContainer>
  );
}
