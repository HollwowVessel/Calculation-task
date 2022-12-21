import { HomeFunction } from "pages/Home/HomeFunction";
import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { getTheme } from "utils/localStorage";

import { Context } from "../constants/context";
import { routes } from "../constants/routes";
import { theme } from "../theme";

function App() {
  const [themeType, setThemeType] = useState(getTheme() || theme.light);

  const contextObj = useMemo(
    () => ({
      themeType,
      setThemeType,
    }),
    [themeType, setThemeType]
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeType}>
        <Context.Provider value={contextObj}>
          <Routes>
            {routes.map(({ id, element, path }) => (
              <Route path={path} key={id} element={element} />
            ))}
            <Route path="*" element={<HomeFunction />} />
          </Routes>
        </Context.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
