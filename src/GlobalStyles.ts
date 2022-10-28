import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
  }

  body {
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
    //color: #F8F8F8;
    font-family: 'Lato', sans-serif;
    background-color: #F8F8F8;
  }
`;
