import styled from 'styled-components';

export const StyledShowHistoryButton = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.buttonColor};
  margin: 0 0 20px 0;
  border-radius: 20px;
  cursor: pointer;
`;
