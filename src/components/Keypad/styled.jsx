import styled from 'styled-components';

export const StyledButton = styled.input`
  padding: 10px;

  border-radius: 20px;
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: 40px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.buttonColor};
  cursor: pointer;
`;

export const KeypadContainer = styled.div`
  display: grid;
  justify-content: center;
  margin: 0 auto;
  grid-template-columns: repeat(5, 100px);
  gap: 5% 5%;
`;
