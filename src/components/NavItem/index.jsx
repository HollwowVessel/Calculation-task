import { string } from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledNavLink } from './styled';

export const NavItem = ({ name, path }) => {
  const { pathname } = useLocation();

  return (
    <li>
      <StyledNavLink $isActive={pathname === '/' + path} to={path}>
        {name}
      </StyledNavLink>
    </li>
  );
};

NavItem.propTypes = {
  path: string.isRequired,
  name: string.isRequired,
};
