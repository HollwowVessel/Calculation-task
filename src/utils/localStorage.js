export const getTheme = () => {
  return JSON.parse(localStorage.getItem('theme'));
};

export const setTheme = (theme) => {
  localStorage.setItem('theme', JSON.stringify(theme));
};

export const getThemeName = () => {
  return JSON.parse(localStorage.getItem('theme'))?.name;
};

export const clearTheme = () => {
  localStorage.removeItem('theme');
};
