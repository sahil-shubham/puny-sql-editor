import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    background-color: ${(props) => props.theme.backgroundColor};

    font-size: 20px;
    font-family: ${(props) => props.theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
