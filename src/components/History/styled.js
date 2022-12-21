import styled from "styled-components";

export const HistoryContainer = styled.div`
  border-left: 2px solid #000;
  width: ${({ theme }) => theme.width[2]}vw;
  padding: 0 ${({ theme }) => theme.spaces[3]}px;
`;

export const HistoryHeader = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spaces[5]}px;
  color: ${({ theme }) => theme.color};
`;

export const HistoryItems = styled.ul`
  list-style-type: none;
  font-size: ${({ theme }) => theme.fontSize[0]}px;
  color: ${({ theme }) => theme.color};
  height: ${({ theme }) => theme.height[5]}%;
  overflow: auto;
  &::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 30px;
  }
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.width[0]}px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }
`;

export const HistoryItem = styled.li`
  margin: ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[0]};
`;
