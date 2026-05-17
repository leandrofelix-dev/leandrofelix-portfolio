import { Skeleton } from '@/components/atoms/Skeleton'

import { TitleWrapper } from './SectionTitleSkeleton.styles'

export function SectionTitleSkeleton() {
  return (
    <TitleWrapper>
      <Skeleton width="5rem" height="0.75rem" />
      <Skeleton width="12rem" height="2rem" radius="0.5rem" />
      <Skeleton width="min(480px, 90%)" height="0.875rem" />
      <Skeleton width="min(360px, 70%)" height="0.875rem" />
    </TitleWrapper>
  )
}
