import { Context } from "constants/context";
import { selectOptions } from "constants/select";
import React, { useContext } from "react";
import { theme } from "src/theme";
import { setTheme } from "utils/localStorage";

import { Select, SelectWrap } from "./styled";

export function SelectMenu() {
  const { themeType, setThemeType } = useContext(Context);

  const changeTheme = () => (e) => {
    setThemeType(theme(e.target.value));
    setTheme(theme(e.target.value));
  };
  return (
    <SelectWrap>
      <Select onChange={changeTheme()} value={themeType.name} id="theme-select">
        {selectOptions.map(({ id, value, text }) => (
          <option key={id} value={value} id={`${value}`}>
            {text}
          </option>
        ))}
      </Select>
    </SelectWrap>
  );
}
