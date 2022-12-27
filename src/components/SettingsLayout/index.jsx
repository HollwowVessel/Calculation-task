import React from "react";
import { clearHistory } from "utils/localStorage";

import { SelectMenu } from "../SelectMenu";
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
