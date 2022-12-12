import React from 'react';
import { routes } from 'constants/routes';
import { StyledNavBar } from './styled';
import { NavItem } from 'components/NavItem';

export const Nav = () => {
  let links = routes.map(({ id, path, name }) => (
    <NavItem name={name} path={path} key={id} />
  ));
  return <StyledNavBar>{links}</StyledNavBar>;
};
