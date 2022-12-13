import React from 'react';
import { Nav } from 'components/Nav/Class';
import { StyledAppName, StyledHeader } from '../styled';

export class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <StyledAppName>Calculator App</StyledAppName>
        <Nav />
      </StyledHeader>
    );
  }
}
