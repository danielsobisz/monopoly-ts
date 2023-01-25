import { createGlobalStyle } from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';

import background from 'assets/background.jpg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 80rem;
    max-height: 108rem;
    margin: 0;


    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    font-family: "Roboto Mono", sans-serif;
    font-weight: 400;
    font-size: 1rem;

    color: ${pickColor('black')};
    text-transform: uppercase;
  }

  button {
    border: none;
    background-color: transparent;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

.app {
  height: 100%;
}
`;

export { GlobalStyle };
