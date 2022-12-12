import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledNavLink } from './styled';

export const NavItem = ({ name, path }) => {
  const { pathname } = useLocation();
  console.log('/' + pathname === path, path, pathname, name);
  return (
    <li>
      <StyledNavLink $isActive={pathname === '/' + path} to={path}>
        {name}
      </StyledNavLink>
    </li>
  );
};
