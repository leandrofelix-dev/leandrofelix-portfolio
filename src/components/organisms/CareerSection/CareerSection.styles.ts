import styled from 'styled-components'

import { media } from '@/theme/media'

export const CareerRoot = styled.section``

export const CareerArea = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    margin-top: -0.25rem;
    margin-bottom: 0.35rem;
  }

  h4 {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
    text-transform: none;
    letter-spacing: 0;
  }
`

export const PositionCard = styled.div`
  border: 1px solid var(--primary-dark);
  border-radius: 1rem;
  overflow: hidden;
  padding: 2rem;
  background: var(--background-dim2);
  --padding: 2rem;
  --padding-left: 2rem;
  --padding-bottom: 2rem;

  ${media.mobile} {
    padding: 2rem 1rem;
  }
`

export const CompanyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: calc(var(--grid-32, 32px) * 20);
`

export const CompanyHeader = styled.span`
  display: flex;
  flex-direction: column;
`
