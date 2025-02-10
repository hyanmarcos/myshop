import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color:rgb(232, 213, 213);
  }

  body, button, input {
    font-family: 'Poppins', sans-serif;
  }

`;
