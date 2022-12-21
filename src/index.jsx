import ErrorBoundary from "components/ErrorBoundary";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App/App";
import { GlobalStyles } from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <GlobalStyles />
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
