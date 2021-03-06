import { css } from '@emotion/core';

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    min-height: 100vh;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: #666;
    font-size: 1.6rem;
    font-family: 'Lato', Helvetica, sans-serif;
    font-weight: 300;
    line-height: 1;
  }

  a {
    color: #5badf0;
    transition: color 300ms;
    font-weight: 400;
    text-decoration: none;
  }
  @media (max-width: 30em) {
    a {
      margin-bottom: 2rem;
    }
  }
  a:hover,
  a:active {
    color: #f24976;
  }

  h2,
  h3 {
    color: #aaa;
    font-weight: 300;
    font-size: 2.08rem;
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

export default globalStyles;
