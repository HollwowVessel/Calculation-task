import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Functional } from 'pages/Functional';
import { setTheme, getTheme, clearTheme } from 'utils/localStorage';
import { Settings } from 'pages/Settings';
import { Header } from 'components/Header';
import { Class } from 'pages/Class';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme';

export const AppRouter = () => {
  const [themeType, setThemeType] = useState(getTheme() || theme.light);
  const changeTheme = () => (e) => {
    setThemeType(theme[e.target.value]);
    setTheme(theme[e.target.value]);
  };
  const clearThemeType = () => {
    clearTheme();
    setThemeType(theme.light);
  };
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={themeType}>
          <Header />
          <Routes>
            <Route path='/' element={<Functional />} />
            <Route
              path='/Settings'
              element={
                <Settings
                  setTheme={changeTheme}
                  clearTheme={clearThemeType}
                  theme={themeType}
                />
              }
            />
            <Route path='/Class' element={<Class />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};
