import styled from 'styled-components'

import { media } from '@/theme/media'

export const RecentRoot = styled.section`
  background: var(--background-dim);
  border-bottom: 1px solid var(--primary-dark);
`

export const RecentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const ProfileMeta = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-basis: calc(50% - 1rem);
  border: 1px solid var(--primary-dark);
  background-color: var(--background);
  border-radius: 1rem;
  padding: 1rem;

  ${media.mobile} {
    flex-basis: 100%;
  }
`
