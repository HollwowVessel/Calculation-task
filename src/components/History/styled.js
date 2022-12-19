import styled from "styled-components";

export const HistoryContainer = styled.div`
  border-left: 2px solid #000;
  width: 30vw;
  padding: 0 20px 0 20px;
`;

export const HistoryHeader = styled.h2`
  text-align: center;
  margin: 0px 0 40px 0;
  color: ${({ theme }) => theme.color};
`;

export const HistoryItems = styled.ul`
  list-style-type: none;
  font-size: 20px;
  color: ${({ theme }) => theme.color};
  max-height: 80%;
  overflow: auto;
  &::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 30px;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }
`;

export const HistoryItem = styled.li`
  margin: 5px 0px 5px 0;
`;
