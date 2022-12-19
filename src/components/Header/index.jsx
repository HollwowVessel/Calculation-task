import { routes } from "constants/routes";
import React from "react";
import { useLocation } from "react-router-dom";

import {
  StyledAppName,
  StyledHeader,
  StyledNavBar,
  StyledNavLink,
} from "./styled";

export function Header() {
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <StyledAppName>Calculator App</StyledAppName>
      <StyledNavBar>
        {routes.map(({ id, path, name }) => (
          <li key={id}>
            <StyledNavLink $isActive={pathname === `/${path}`} to={path}>
              {name}
            </StyledNavLink>
          </li>
        ))}
      </StyledNavBar>
    </StyledHeader>
  );
}
