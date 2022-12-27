const path = require("path");

module.exports = {
  webpack: {
    alias: {
      src: path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      constants: path.resolve(__dirname, "src/constants"),
      utils: path.resolve(__dirname, "src/utils"),
      fonts: path.resolve(__dirname, "src/assets/fonts"),
      icons: path.resolve(__dirname, "src/assets/icons"),
      store: path.resolve(__dirname, "src/assets/store"),
      selectors: path.resolve(__dirname, "src/assets/selectors"),
    },
  },
};
