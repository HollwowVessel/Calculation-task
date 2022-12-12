import styled from 'styled-components';
import dropdownIcon from 'icons/dropDownIcon.svg';

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
