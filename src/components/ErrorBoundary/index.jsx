import React, { Component } from "react";

import { ErrorHeader } from "./styled";

const ErrorBoundary = class extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorHeader>Ooops. Something went wrong!</ErrorHeader>;
    }
    return this.props.children;
  }
};

export default ErrorBoundary;
