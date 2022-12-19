import { routes } from "constants/routes";
import React from "react";
import { useLocation } from "react-router-dom";

import { AppName, HeaderWrapper, NavBar, NavLinkItem } from "./styled";

export function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderWrapper>
      <AppName>Calculator App</AppName>
      <NavBar>
        {routes.map(({ id, path, name }) => (
          <li key={id}>
            <NavLinkItem $isActive={pathname === `/${path}`} to={path}>
              {name}
            </NavLinkItem>
          </li>
        ))}
      </NavBar>
    </HeaderWrapper>
  );
}
