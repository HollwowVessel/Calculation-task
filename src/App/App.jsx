import { Context } from "constants/context";
import { routes } from "constants/routes";
import { HomeFunction } from "pages/Home/HomeFunction";
import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "src/theme";
import { ThemeProvider } from "styled-components";
import { getTheme } from "utils/localStorage";

function App() {
  const [themeType, setThemeType] = useState(getTheme() || theme("light"));
  const contextObj = useMemo(
    () => ({
      themeType,
      setThemeType,
    }),
    [themeType]
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
