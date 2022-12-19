import dropdownIcon from "icons/dropDownIcon.svg";
import styled from "styled-components";

export const SettingsLayoutContainer = styled.div`
  padding: 60px 0 0 60px;
  background: ${({ theme }) => theme.background};
  height: 91vh;
  overflow: hidden;
`;

export const StyledSettingsName = styled.h2`
  font-size: 50px;
  color: #000;
  margin: 0 0 60px 0;
`;

export const StyledClearHistory = styled.button`
  display: block;
  cursor: pointer;
  border-radius: 8px;
  font-size: 24px;
  padding: 20px;
  width: 400px;
  background: ${({ theme }) => theme.buttonColor};
  text-align: left;
`;

export const StyledSelect = styled.select`
  cursor: pointer;
  width: 400px;
  height: 90px;
  appearance: none;
  background-color: transparent;
  border: none;
  outline: 2px solid #000;
  border-radius: 8px;
  padding: 0 0 0 32px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.buttonColor};
  font-size: 24px;
`;

export const StyledSelectWrap = styled.div`
  cursor: pointer;
  position: relative;
  width: 400px;
  height: 90px;
  margin: 0 0 40px 0;
  &::after {
    content: url(${dropdownIcon});
    width: 23px;
    height: 21px;
    position: absolute;
    top: 33px;
    right: 25px;
  }
`;
