import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
  }
`;

export const theme = {
  light: {
    name: 'light',
    color: '#000',
    background: '#fff',
    buttonColor: '#f2f2f2',
    expressionColor: '#999',
  },
  dark: {
    name: 'dark',
    color: '#fff',
    background: '#5a5a5a',
    buttonColor: '#434343',
    expressionColor: '#cbb9b9',
  },
  colored: {
    name: 'colored',
    color: 'red',
    background: 'green',
    buttonColor: 'f2f2f2',
    expressionColor: 'white',
  },
};
