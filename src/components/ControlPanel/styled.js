import styled from "styled-components";

export const StyledShowHistoryButton = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.buttonColor};
  margin: 0 10px 20px 10px;
  border-radius: 20px;
  cursor: pointer;
  width: auto;
  height: 50px;
`;
