import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spaces[3]}px
    ${({ theme }) => theme.spaces[6]}px;
  background: #131313;
  height: ${({ theme }) => theme.height[1]}vh;
`;

export const AppName = styled.h1`
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize[2]}px;
`;

export const NavBar = styled.ul`
  list-style-type: none;
  display: flex;
  gap: ${({ theme }) => theme.spaces[3]}px;
`;

export const NavLinkItem = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  position: relative;

  ${({ $isActive }) => {
    if ($isActive) {
      return css`
        &::after {
          position: absolute;
          content: "";
          height: ${({ theme }) => theme.height[0]}px;
          margin: ${({ theme }) => theme.spaces[0]}
            ${({ theme }) => theme.spaces[6]};
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
