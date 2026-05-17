import { createGlobalStyle } from 'styled-components'

import { media } from './media'

export const GlobalStyle = createGlobalStyle`
  ::selection {
    color: var(--background);
    background: var(--secondary);
  }

  html {
    font-size: 16px;
    font-family: var(--font-sans);
    color: var(--primary-dim);
    background: var(--background);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    width: 100%;
    overflow-x: hidden;
  }

  img {
    border-radius: 0.5rem;
    filter: brightness(var(--brightness-low));

    &:hover {
      filter: brightness(var(--brightness-high));
    }
  }

  button.button {
    cursor: pointer;
    font-family: var(--font-accent);
    font-size: 1rem;
    font-weight: 700;
    padding: 0.75rem 2.5rem;
    border-radius: 99rem;
    border: none;
    margin-right: 1rem;
    transition: all 750ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transition: all 750ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.primary {
      background-color: var(--secondary);
      color: var(--background);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: 1px solid transparent;

      &:hover {
        background-color: var(--background);
        color: var(--secondary);
        border: 1px solid var(--secondary);
      }
    }

    &.secondary {
      background-color: transparent;
      border: 1px solid var(--primary-dark);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      &:hover {
        color: var(--primary-bright);
        background-color: var(--primary-dark);
      }
    }
  }

  h1 {
    font-size: var(--font-xl);
    font-family: var(--font-sans);
    font-weight: 600;
    letter-spacing: -0.1rem;
  }

  h2 {
    color: var(--primary);
    font-size: var(--font-xl);
    font-family: var(--font-sans);
    font-weight: 700;
    letter-spacing: -0.05rem;
  }

  h3 {
    font-size: var(--font-m);
    font-family: var(--font-sans);
    color: var(--primary);
    font-weight: 600;
    letter-spacing: -0.01rem;
  }

  h4 {
    font-size: var(--font-xs);
    font-family: var(--font-sans);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  h5 {
    font-size: var(--font-m);
    font-family: var(--font-sans);
    color: var(--primary);
    font-weight: 600;
    letter-spacing: -0.01rem;
  }

  p {
    font-size: var(--font-r);
    font-family: var(--font-sans);
    line-height: 1.6;
    letter-spacing: -0.02rem;

    &.subtitle {
      font-family: var(--font-accent);
      font-size: var(--font-r-s);
      font-weight: 600;
      letter-spacing: 0;
    }
  }

  a {
    font-weight: 600;
    color: var(--primary);
    text-decoration: none;

    &:hover {
      color: var(--primary-bright);

      h3 {
        color: var(--primary-bright);
      }
    }

    svg {
      margin-left: 0.25rem;
    }
  }

  .noEvents {
    pointer-events: none;
  }

  .list {
    list-style: disc;
    margin-left: 1.5rem;
  }

  .leaveSite::after {
    content: '↗';
    position: relative;
    font-size: inherit;
    line-height: 0;
    vertical-align: -1px;
    margin-left: 0.5rem;
  }

  .borderBottom {
    border-bottom: 1px solid var(--primary-dark);
  }

  #gradient-canvas {
    position: absolute;
    z-index: -1;
    opacity: 100%;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
    aspect-ratio: auto;
    --gradient-color-1: var(--mesh-color-1);
    --gradient-color-2: var(--mesh-color-2);
    --gradient-color-3: var(--mesh-color-3);
    --gradient-color-4: var(--mesh-color-4);
  }

  .highlight {
    --looking-bg-1: var(--neon-1-1);
    --looking-bg-2: var(--neon-1-2);
    width: fit-content;
    background: linear-gradient(90deg, var(--looking-bg-1) 0%, var(--looking-bg-2) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .back-to-top {
    position: fixed;
    top: 70px;
    right: 50px;
    width: 50px;
    height: 50px;
    padding: 0;
    background-color: var(--primary-bright);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-dark);
    font-size: 20px;
    z-index: 9999;

    ${media.mobile} {
      right: 20px;
    }
  }

  .image404 {
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .centered-image404 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .not-found-title404 {
    color: var(--primary-bright);
    font-size: 36px;
    margin-top: 10px;
  }

  .not-found-text404 {
    color: var(--primary);
    font-size: 24px;
    margin-top: 10px;
  }

  .go-back-button404 {
    margin-top: 20px;
    padding: 10px 20px;
    background: var(--secondary);
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }

  .anim {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    flex-direction: row;
  }

  .ghost,
  .ufo {
    margin-left: 10px;
  }

  ${media.mobile} {
    .not-found-title404 {
      font-size: 18px;
      white-space: normal;
    }

    .not-found-text404 {
      font-size: 14px;
      white-space: normal;
    }
  }
`
