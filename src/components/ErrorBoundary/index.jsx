import React, { Component } from "react";

import { StyledErrorHeader } from "./styled";

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
      return (
        <StyledErrorHeader>Ooops. Something went wrong!</StyledErrorHeader>
      );
    }
    return this.props.children;
  }
};

export default ErrorBoundary;
