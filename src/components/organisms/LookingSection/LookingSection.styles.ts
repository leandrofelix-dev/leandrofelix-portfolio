import styled from 'styled-components'

export const LookingSectionRoot = styled.section`
  background-color: var(--background-dim);
`

export const LookingContainer = styled.div`
  text-align: left;
  max-width: 700px;

  h2 {
    font-size: var(--font-xl-l);
  }

  h4 {
    font-family: var(--font-accent);
    text-transform: none;
    font-size: var(--font-r-s);
    letter-spacing: 0.01rem;
  }
`

export const JsonBrace = styled.h2`
  line-height: 0.9;
`

export const JsonLine = styled.h2`
  line-height: 0.9;
  margin: 0.25rem 0;
  margin-left: 2rem;
`

export const Highlight = styled.span`
  background: linear-gradient(90deg, var(--neon-1-1) -45%, var(--neon-1-2) 125%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`
