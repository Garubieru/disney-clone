import { createGlobalStyle } from "styled-components";

import { colors } from "../config/theme";

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: none;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${colors.colorGray};
    border-radius: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
  }

  body {
    display: flex;
    flex-direction: column;

    background: ${colors.colorBackground};
    color: ${colors.colorWhite}
  }

  html
  body,
  button,
  input,
  a {
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
  }

  a {
    color: ${colors.colorWhite};
    text-decoration: none;
  }

  #root {
    flex: 1;

    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    :root {
      font-size: 62.5%;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    :root {
      font-size: 60%;
    }
  }

  @media only screen and (max-width: 479px) {
    :root {
      font-size: 55%;
    }
  }
`;
