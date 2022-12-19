import { selectOptions } from "constants/select";
import { func, object } from "prop-types";
import React from "react";

import {
  ClearHistory,
  Select,
  SelectWrap,
  SettingsLayoutContainer,
  SettingsName,
} from "./styled";

export function SettingsLayout({ setTheme, clearAll, theme }) {
  return (
    <SettingsLayoutContainer>
      <SettingsName>Settings</SettingsName>
      <SelectWrap>
        <Select onChange={setTheme()} value={theme.name} id="theme-select">
          {selectOptions.map(({ id, value, text }) => (
            <option key={id} value={value} id={`${value}`}>
              {text}
            </option>
          ))}
        </Select>
      </SelectWrap>
      <ClearHistory onClick={clearAll} id="history-clear">
        Clear All History
      </ClearHistory>
    </SettingsLayoutContainer>
  );
}

SettingsLayout.propTypes = {
  theme: object.isRequired,
  setTheme: func.isRequired,
  clearAll: func.isRequired,
};
