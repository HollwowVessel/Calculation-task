import styled from 'styled-components';

export const StyledButton = styled.input`
  padding: 10px;

  border-radius: 20px;
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: 24px;
  color: #000;
  background: rgb(242, 242, 242);
  cursor: pointer;
`;

export const KeypadContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 10% 12%;
`;
