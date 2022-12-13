import React, { Component } from 'react';
import { StyledErrorHeader } from './styled';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  getDerivedStateFromError() {
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
}
