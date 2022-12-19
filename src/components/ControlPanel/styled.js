import styled from "styled-components";

export const ShowHistoryButton = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.buttonColor};
  margin: 0 50px 20px 50px;
  border-radius: 20px;
  cursor: pointer;
  width: auto;
  height: 50px;
`;
