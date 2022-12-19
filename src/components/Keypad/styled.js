import styled from "styled-components";

export const Button = styled.input`
  padding: 10px;

  border-radius: 20px;
  width: 70px;
  height: 70px;
  text-align: center;
  font-size: 40px;
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
  margin: 0 auto;
  grid-template-columns: repeat(5, 80px);
  gap: 2% 2%;
`;
