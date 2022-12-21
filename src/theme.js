const width = [10, 20, 30, 70, 100, 400, "auto"];
const height = [2, 10, 20, 50, 70, 80, 90, 91];
const spaces = [0, 5, 10, 20, 30, 32, 40, 50, 60];
const fontSize = [20, 24, 25, 40, 50];

const light = {
  name: "light",
  color: "#000",
  background: "#fff",
  buttonColor: "#f2f2f2",
  expressionColor: "#999",
};
const dark = {
  name: "dark",
  color: "#fff",
  background: "#5a5a5a",
  buttonColor: "#434343",
  expressionColor: "#cbb9b9",
};
const colored = {
  name: "colored",
  color: "red",
  background: "green",
  buttonColor: "f2f2f2",
  expressionColor: "white",
};

const coloredThemes = {
  light,
  dark,
  colored,
};

export const theme = (themeType) => ({
  width,
  height,
  spaces,
  fontSize,
  ...coloredThemes[themeType],
});
