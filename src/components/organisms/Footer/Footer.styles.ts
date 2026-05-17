import styled from 'styled-components'

import { media } from '@/theme/media'

export const FooterRoot = styled.footer`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const FooterGrid = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  ${media.mobile} {
    flex-direction: column;
  }
`

export const FooterColumn = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;

  h4 {
    margin-bottom: var(--size-1x);
  }

  li {
    margin-bottom: var(--size-2-);
  }

  a {
    font-size: var(--font-s);
    font-weight: 600;
    color: var(--primary);

    &:hover {
      color: var(--primary-bright);
    }

    svg {
      display: inline;
      height: 0.75rem;
      margin-left: 0.25rem;
    }
  }

  p {
    font-size: var(--font-s);
  }
`

export const SocialRow = styled.li`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
  }
`
