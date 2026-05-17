import styled from 'styled-components'

import { media } from '@/theme/media'

export const CardRoot = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 2rem;
  background-color: var(--background-dim2);
  border: 1px solid var(--primary-dark);
  margin-bottom: 2rem;
  overflow: hidden;

  ${media.mobile} {
    flex-direction: column;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-2x);
  padding: 2rem;
  flex: 1;
  min-width: 0;
`

export const ImageArea = styled.div`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  min-height: 12rem;

  ${media.mobile} {
    flex: none;
    min-height: 10rem;
  }
`
