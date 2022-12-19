import { Header } from "components/Header";
import { HomeClass } from "pages/Home/HomeClass";
import { HomeFunction } from "pages/Home/HomeFunction";
import { Settings } from "pages/Settings";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { clearHistory, getTheme, setTheme } from "utils/localStorage";

import { theme } from "../theme";

function App() {
  const [themeType, setThemeType] = useState(getTheme() || theme.light);
  const changeTheme = () => (e) => {
    setThemeType(theme[e.target.value]);
    setTheme(theme[e.target.value]);
  };
  const clearAll = () => {
    clearHistory();
  };

  return (
    <BrowserRouter>
      <Header />
      <ThemeProvider theme={themeType}>
        <Routes>
          <Route path="/" element={<HomeFunction />} />
          <Route
            path="/Settings"
            element={
              <Settings
                setTheme={changeTheme}
                clearAll={clearAll}
                theme={themeType}
              />
            }
          />
          <Route path="/Class" element={<HomeClass />} />
          <Route path="*" element={<HomeFunction />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
