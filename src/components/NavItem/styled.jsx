import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 25px;
  position: relative;

  ${({ $isActive }) => {
    if ($isActive) {
      return css`
        &::after {
          position: absolute;
          content: '';
          height: 2px;
          margin: 0 auto;
          left: 0;
          right: 0;
          bottom: -5px;
          background: #fff;
        }
      `;
    }
  }}
`;
