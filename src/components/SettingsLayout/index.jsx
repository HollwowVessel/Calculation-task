import { Context } from "constants/context";
import { selectOptions } from "constants/select";
import React, { useContext } from "react";
import { clearHistory, setTheme } from "utils/localStorage";

import { theme } from "../../theme";
import {
  ClearHistory,
  Select,
  SelectWrap,
  SettingsLayoutContainer,
  SettingsName,
} from "./styled";

export function SettingsLayout() {
  const { themeType, setThemeType } = useContext(Context);

  const changeTheme = () => (e) => {
    setThemeType(theme[e.target.value]);
    setTheme(theme[e.target.value]);
  };

  return (
    <SettingsLayoutContainer>
      <SettingsName>Settings</SettingsName>
      <SelectWrap>
        <Select
          onChange={changeTheme()}
          value={themeType.name}
          id="theme-select"
        >
          {selectOptions.map(({ id, value, text }) => (
            <option key={id} value={value} id={`${value}`}>
              {text}
            </option>
          ))}
        </Select>
      </SelectWrap>
      <ClearHistory onClick={clearHistory()} id="history-clear">
        Clear All History
      </ClearHistory>
    </SettingsLayoutContainer>
  );
}
