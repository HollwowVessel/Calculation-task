import styled from "styled-components";

export const ShowHistoryButton = styled.button`
  padding: ${({ theme }) => theme.spaces[2]}px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.buttonColor};
  margin: 0 ${({ theme }) => theme.spaces[4]}px
    ${({ theme }) => theme.spaces[3]}px ${({ theme }) => theme.spaces[4]}px;

  border-radius: 20px;
  cursor: pointer;
  width: ${({ theme }) => theme.width[6]};
  height: ${({ theme }) => theme.height[3]}px;
`;
