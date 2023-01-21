import { createGlobalStyle } from "styled-components";

import background from "assets/background.jpg";

import { pickColor } from "themes/helpers/pickColor";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    margin: 0;

    /* overflow: hidden; */

    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;

    color: ${pickColor("black")};
    text-transform: uppercase;
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
