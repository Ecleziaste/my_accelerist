import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: "Rubik", sans-serif;
  line-height: 18px;
  height: 100%;
}

#__next {
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #182026;
  text-decoration: none;
}

button {
  outline: none;
  cursor: pointer;
}

input {
  outline: none;
}

/* img {
  max-width: 100%;
  display: block;
}  */

`;
