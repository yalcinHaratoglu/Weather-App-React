import { createGlobalStyle } from 'styled-components';
import { colors } from '@/theme/index';
export default createGlobalStyle`

  *{
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }// Reset CSS

  html, body {
    background-color:${colors.background};
    color: ${colors.primaryDark};
  } // Set the background color for the body
`;
