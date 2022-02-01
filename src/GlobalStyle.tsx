import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'NeutralGrotesk';
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  html {
    overflow: hidden;
  }

  #root {
    height: 100%;
  }

  input {
    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
