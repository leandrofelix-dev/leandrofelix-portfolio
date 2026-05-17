import styled from 'styled-components'

import { media } from '@/theme/media'

export const AboutContent = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  h3 {
    position: relative;
    color: var(--primary-bright);
  }

  ${media.mobile} {
    flex-direction: column;

    > div {
      flex-basis: 100% !important;
    }
  }
`

export const CopyCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-1x);
  border: 1px solid var(--primary-dark);
  border-radius: 2rem;
  background: var(--background-dim2);
  box-shadow: 0 0 30px var(--background);
  overflow: hidden;
  padding: 2rem;

  &:not(:last-of-type) {
    margin-bottom: var(--size-1x);
  }

  ${media.mobile} {
    padding: 2rem 1.25rem;
  }
`

export const CopyColumn = styled.div`
  flex-basis: calc(60% + 1px);
  flex-grow: 1;
  flex-shrink: 1;

  ${media.mobile} {
    padding: 0;
  }
`

export const ImageColumn = styled.div<{ $technical?: boolean }>`
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
  z-index: -10;

  img {
    height: 100%;
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 2rem;
  }

  ${({ $technical }) =>
    $technical &&
    `
    img {
      overflow: visible;
      filter: brightness(100%);
    }
  `}

  ${media.mobile} {
    padding: 1rem;

    ${({ $technical }) =>
      $technical &&
      `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 140%;
      z-index: -1;
    `}
  }
`
