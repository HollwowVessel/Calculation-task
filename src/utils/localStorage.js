export const getTheme = () => {
  return JSON.parse(localStorage.getItem("theme"));
};

export const setTheme = (theme) => {
  localStorage.setItem("theme", JSON.stringify(theme));
};

export const getThemeName = () => {
  return JSON.parse(localStorage.getItem("theme"))?.name;
};

export const clearTheme = () => {
  localStorage.removeItem("theme");
};

export const setHistory = (history) => {
  localStorage.setItem("history", JSON.stringify(history));
};

export const getHistory = () => {
  const history = JSON.parse(localStorage.getItem("history"));
  return history;
};

export const clearHistory = () => {
  localStorage.removeItem("history");
};
