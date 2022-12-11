import React from 'react';
import { Nav } from 'components/Nav';
import { StyledAppName, StyledHeader } from './styled';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledAppName>Calculator App</StyledAppName>
      <Nav />
    </StyledHeader>
  );
};
