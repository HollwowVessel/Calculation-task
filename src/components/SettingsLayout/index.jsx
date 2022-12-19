import { selectOptions } from "constants/select";
import { func, object } from "prop-types";
import React from "react";

import {
  SettingsLayoutContainer,
  StyledClearHistory,
  StyledSelect,
  StyledSelectWrap,
  StyledSettingsName,
} from "./styled";

export function SettingsLayout({ setTheme, clearAll, theme }) {
  return (
    <SettingsLayoutContainer>
      <StyledSettingsName>Settings</StyledSettingsName>
      <StyledSelectWrap>
        <StyledSelect
          onChange={setTheme()}
          value={theme.name}
          id="theme-select"
        >
          {selectOptions.map(({ id, value, text }) => (
            <option key={id} value={value} id={`${value}`}>
              {text}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectWrap>
      <StyledClearHistory onClick={clearAll} id="history-clear">
        Clear All History
      </StyledClearHistory>
    </SettingsLayoutContainer>
  );
}

SettingsLayout.propTypes = {
  theme: object.isRequired,
  setTheme: func.isRequired,
  clearAll: func.isRequired,
};
