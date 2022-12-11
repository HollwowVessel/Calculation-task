import React from 'react';
import { StyledNavLink } from './styled';

export const NavItem = ({ name, path }) => {
  return (
    <li>
      <StyledNavLink to={path}>{name}</StyledNavLink>
    </li>
  );
};
