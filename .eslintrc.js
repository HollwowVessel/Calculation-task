module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "simple-import-sort", "import"],
  rules: {
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "no-restricted-syntax": 0,
    "no-plusplus": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/no-cycle": 0,
    "no-use-before-define": 0,
    "no-param-reassign": 0,
    "no-restricted-globals": 0,
    "react/forbid-prop-types": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "react/prefer-stateless-function": 0,
    "no-useless-constructor": 0,
    "react/no-array-index-key": 0,
    "react/jsx-filename-extension": 0,
  },
};
