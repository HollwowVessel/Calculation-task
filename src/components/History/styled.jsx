import styled from 'styled-components';

export const StyledHistoryContainer = styled.div`
  border-left: 2px solid #000;
  width: 30vw;
  padding: 0 0 0 20px;

  h2 {
    text-align: center;
    margin: 0px 0 40px 0;
    color: ${({ theme }) => theme.color};
  }
`;

export const StyledHistoryItems = styled.ul`
  list-style-type: none;
  font-size: 30px;
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
    background: #fff;
  }
  li {
    margin: 5px 0px 5px 0;
  }
`;
