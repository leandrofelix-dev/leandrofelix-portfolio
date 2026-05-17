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

export const Profile = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  img {
    border-radius: 99rem;
    width: 60px;
    height: 60px;
  }

  a {
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`

export const ProjectArticle = styled.article`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 1rem);
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid var(--primary-dark);
  background-color: var(--background);
  border-radius: 1rem;
  padding: 1rem;
  overflow: hidden;

  ${media.mobile} {
    flex-basis: 100%;
  }
`

export const ProjectHeader = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Homepage = styled.p`
  font-size: 0.8rem;
`

export const ProjectDetails = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 3rem;

  p {
    line-height: 1;
  }
`

export const PushedAt = styled.p`
  flex-grow: 1;
  font-family: var(--font-accent);
  font-size: 0.6rem;
  display: flex;
  justify-content: flex-end;
`

export const TopicsContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const Topic = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background: var(--background-dim2);
`
