import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #090909;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
