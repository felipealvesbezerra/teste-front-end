import { createGlobalStyle } from 'styled-components';

const GlobalStyleApp = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background-color: #FFF;
    color: #000;
    background-repeat: repeat;
    background-attachment: fixed;
  }

  body:before{
    content: "";
    display: block;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    mix-blend-mode: color-dodge;
    z-index: -1;
  }

  html {
    scroll-behavior:smooth
  }

  body, input, button, html {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  #root{
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 600px){
    body, input, button, html {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
}
`;

export default GlobalStyleApp;
