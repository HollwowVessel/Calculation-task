import React from 'react';
import { routes } from 'constants/routes';
import { StyledNavBar } from './styled';
import { NavItem } from 'components/NavItem';

export const Nav = () => {
  let links = routes.map((el) => <NavItem name={el} />);
  return <StyledNavBar>{links}</StyledNavBar>;
};
