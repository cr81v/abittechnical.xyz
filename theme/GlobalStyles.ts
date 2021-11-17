import { createGlobalStyle } from 'styled-components'
import normalize from './normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};
  // most of this was 'borrowed from https://codepen.io/havardob/pen/gOPNpmm 
  :root {
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-primary-alt: ${({ theme }) => theme.colors.primaryAlt};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --font-family-primary: ${({ theme }) => theme.fontFamily.primary};
    --font-family-secondary: ${({ theme }) => theme.fontFamily.secondary};
    
    --font-size-h1: 2.5rem;
    --font-size-h2: 1.5rem;
    --font-size-h3: 1.25rem;
    --font-size-h4: 1.125rem;
    --font-size-text: 1rem;
  }
  @media all and (min-width: 1300px) {
    :root {
      --font-size-h1: 3.5rem;
      --font-size-h2: 2.5rem;
      --font-size-h3: 1.5rem;
      --font-size-h4: 1.25rem;
      --font-size-text: 1.125rem;
    }
  }
  :focus {
    outline-offset: 0.25rem;
    outline: 0.25rem dashed var(--color-primary);
  }
  body {
    padding: 0;
    margin: 0;
  }
  @media all and (min-width: 1300px) {
    body {
      padding-top: 8rem; 
    }
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  blockquote {
    padding: 0;
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
  }
  h1 {
    line-height: 1.125;
    font-size: var(--font-size-h1);
    font-size: clamp(2rem, 4vw, var(--font-size-h1));
  }
  h2 {
    line-height: 1.25;
    font-size: var(--font-size-h2);
    font-size: clamp(2rem, 4vw, var(--font-size-h2));
  }
  a {
    color: inherit;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  body {
    min-height: 100vh;
    font-size: 100%;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    overflow-x: hidden;
    font-family: var(--font-family-primary);
    font-size: var(--font-size-text);
    color: var(--color-primary);
    background-image: -webkit-repeating-radial-gradient(
            center center,
            var(--color-primary),
            var(--color-primary) 1px,
            var(--color-secondary) 1px,
            var(--color-secondary) 100%
    );
    background-size: 8px 8px;
  }
`

export default GlobalStyles
