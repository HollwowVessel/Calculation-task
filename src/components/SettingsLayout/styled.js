import dropdownIcon from "icons/dropDownIcon.svg";
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

export const Select = styled.select`
  cursor: pointer;
  width: ${({ theme }) => theme.width[5]}px;
  height: ${({ theme }) => theme.height[6]}px;
  appearance: none;
  background-color: transparent;
  border: none;
  outline: 2px solid #000;
  border-radius: 8px;
  padding-left: ${({ theme }) => theme.spaces[4]}px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.buttonColor};
  font-size: ${({ theme }) => theme.fontSize[2]}px;
`;

export const SelectWrap = styled.div`
  cursor: pointer;
  position: relative;
  width: ${({ theme }) => theme.width[5]}px;
  height: ${({ theme }) => theme.height[6]}px;
  margin-bottom: ${({ theme }) => theme.spaces[4]}px;
  &::after {
    content: url(${dropdownIcon});
    width: ${({ theme }) => theme.width[1]}px;
    height: ${({ theme }) => theme.height[3]}px;
    position: absolute;
    top: 33px;
    right: 25px;
  }
`;
