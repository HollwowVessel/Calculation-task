import styled from "styled-components";

export const SettingsLayoutContainer = styled.div`
  padding: ${({ theme }) => theme.spaces[8]}px 0 0
    ${({ theme }) => theme.spaces[8]}px;
  background: ${({ theme }) => theme.background};
  height: ${({ theme }) => theme.height[6]}vh;

  overflow: hidden;
`;

export const SettingsName = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[4]}px;
  color: #000;
  margin-bottom: ${({ theme }) => theme.spaces[5]}px;
`;

export const ClearHistory = styled.button`
  display: block;
  cursor: pointer;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  padding: ${({ theme }) => theme.spaces[3]}px;
  width: ${({ theme }) => theme.width[5]}px;
  background: ${({ theme }) => theme.buttonColor};
  text-align: left;
`;
