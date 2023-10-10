import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}



 * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;

}

body {
  font-family: 'Quantico', sans-serif;
  background-color: #17262B;
  color: #e2ded0;
}
a {
  color: inherit;
  text-decoration: none;
} 

ul,ol {
  list-style:none;
}

h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
}
`;
