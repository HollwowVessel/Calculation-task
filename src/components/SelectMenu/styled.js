import dropdownIcon from "icons/dropDownIcon.svg";
import styled from "styled-components";

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
    pointer-events: none;
    position: absolute;
    top: 33px;
    right: 30px;
  }
`;
