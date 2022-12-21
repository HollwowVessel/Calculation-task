import styled from "styled-components";

export const Button = styled.input`
  padding: ${({ theme }) => theme.spaces[2]}px;

  border-radius: 20px;
  width: ${({ theme }) => theme.width[3]}px;
  height: ${({ theme }) => theme.height[4]}px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize[3]}px;

  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.buttonColor};
  cursor: pointer;
  transition: 0.4s;
  &:hover,
  &:focus,
  &:active {
    opacity: 0.8;
    scale: 1.05;
  }
`;

export const KeypadContainer = styled.div`
  display: grid;
  justify-content: center;
  margin: ${({ theme }) => theme.spaces[0]} ${({ theme }) => theme.spaces[6]};
  grid-template-columns: repeat(5, 80px);
  gap: 2% 2%;
`;
