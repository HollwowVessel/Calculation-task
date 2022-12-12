import styled from 'styled-components';

export const SettingsLayoutContainer = styled.div`
  margin: 0 0 0 60px;
`;

export const StyledSettingsName = styled.h2`
  font-size: 50px;
  color: #000;
  margin: 60px 0 40px 0;
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
