import { Container } from '@/components/atoms/Container'
import { Skeleton } from '@/components/atoms/Skeleton'

import {
  ProfileMeta,
  ProfileRow,
  ProjectCard,
  ProjectsGrid,
  RecentContainer,
  RecentRoot,
} from './RecentProjectsSkeleton.styles'

function RepoCardSkeleton() {
  return (
    <ProjectCard>
      <Skeleton width="55%" height="1.25rem" radius="0.35rem" />
      <Skeleton width="100%" height="0.875rem" />
      <Skeleton width="90%" height="0.875rem" />
      <Skeleton width="70%" height="0.75rem" />
    </ProjectCard>
  )
}

export function RecentProjectsSkeleton() {
  return (
    <RecentRoot aria-busy="true" aria-label="Carregando repositórios">
      <Container spacing={['verticalXXXLrg']}>
        <RecentContainer>
          <Skeleton width="10rem" height="1.5rem" radius="0.35rem" />
          <ProfileRow>
            <Skeleton circle width="60px" height="60px" />
            <ProfileMeta>
              <Skeleton width="12rem" height="1.25rem" />
              <Skeleton width="16rem" height="0.875rem" />
            </ProfileMeta>
          </ProfileRow>
          <ProjectsGrid>
            {Array.from({ length: 6 }).map((_, i) => (
              <RepoCardSkeleton key={i} />
            ))}
          </ProjectsGrid>
        </RecentContainer>
      </Container>
    </RecentRoot>
  )
}
