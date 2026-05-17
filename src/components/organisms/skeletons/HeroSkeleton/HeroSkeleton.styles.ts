import styled from 'styled-components'

import { media } from '@/theme/media'

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid var(--primary-dark);
  max-height: 1440px;
  height: 100vh;
  justify-content: center;
`

export const HeroRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`

export const ImageArea = styled.div`
  width: 300px;
  flex-shrink: 0;

  ${media.mobile} {
    display: none;
  }
`

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 50%;
  width: 28rem;

  ${media.mobile} {
    width: 100%;
    max-width: 100%;
  }
`

export const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`
