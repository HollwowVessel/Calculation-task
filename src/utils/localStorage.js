import { HISTORY, THEME } from "constants/localStorage";

import { calc } from "./commandPattern";

export const getTheme = () => {
  const theme = JSON.parse(localStorage.getItem(THEME));
  return theme;
};

export const setTheme = (theme) => {
  theme = JSON.stringify(theme);
  localStorage.setItem(THEME, theme);
};

export const getThemeName = () => {
  const theme = JSON.parse(localStorage.getItem(THEME));
  return theme.name;
};

export const clearTheme = () => {
  localStorage.removeItem(THEME);
};

export const setHistory = (history) => {
  history = JSON.stringify(history);
  localStorage.setItem(HISTORY, history);
};

export const getHistory = () => {
  const history = JSON.parse(localStorage.getItem(HISTORY));
  return history;
};

export const clearHistory = () => {
  localStorage.removeItem(HISTORY);
  calc.history = [];
};
