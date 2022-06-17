import { createGlobalStyle } from 'styled-components';
import CoFoKak from "../fonts/CoFoKakBlack.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: CoFoKak;
    src: url(${CoFoKak}) format('opentype');
  }

  h1 {
    font-family: CoFoKak, sans-serif;
  }
  h2 {
    font-family: CoFoKak, sans-serif;
  }
  h3 {
    font-family: CoFoKak, sans-serif;
    font-weight: 700;
    font-size: 24px;
  }
`

export default GlobalStyle