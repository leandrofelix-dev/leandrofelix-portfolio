import styled from 'styled-components'

export const ToggleButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  height: 3rem;
  width: auto;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;

  svg {
    display: block;
    position: relative;
    fill: var(--primary-bright);
    margin: auto;
  }
`
