import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css2?family=Crimson+Text:wght@100;200;300;400;500;600;700&display=swap);
  html{
    max-width: 100%;
    overflow-x: hidden;
  }
  
  body {
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #090909;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
  }

  @media(max-width: 1000px){
    html, body {
      overflow-x: hidden;
      z-index: 3;
    }
  }

`;

export default GlobalStyle;
