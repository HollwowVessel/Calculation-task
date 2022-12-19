import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px 20px 40px;
  background: #131313;
`;

export const AppName = styled.h1`
  color: #fff;
  font-size: 25px;
`;

export const NavBar = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
`;

export const NavLinkItem = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 25px;
  position: relative;

  ${({ $isActive }) => {
    if ($isActive) {
      return css`
        &::after {
          position: absolute;
          content: "";
          height: 2px;
          margin: 0 auto;
          left: 0;
          right: 0;
          bottom: -5px;
          background: #fff;
        }
      `;
    }
    return null;
  }}
`;
