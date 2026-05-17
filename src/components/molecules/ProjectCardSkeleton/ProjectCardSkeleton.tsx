import { Skeleton } from '@/components/atoms/Skeleton'

import { CardRoot, Details, ImageArea } from './ProjectCardSkeleton.styles'

interface ProjectCardSkeletonProps {
  reverse?: boolean
}

export function ProjectCardSkeleton({ reverse }: ProjectCardSkeletonProps) {
  return (
    <CardRoot style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
      <Details>
        <Skeleton width="40%" height="0.75rem" />
        <Skeleton width="70%" height="1.75rem" radius="0.5rem" />
        <Skeleton width="100%" height="0.875rem" />
        <Skeleton width="95%" height="0.875rem" />
        <Skeleton width="80%" height="0.875rem" />
        <Skeleton width="6rem" height="2rem" radius="2rem" />
      </Details>
      <ImageArea>
        <Skeleton width="100%" height="10rem" radius="0.5rem" />
      </ImageArea>
    </CardRoot>
  )
}
