import { Container } from '@/components/atoms/Container'
import { Section } from '@/components/atoms/Section'
import { Skeleton } from '@/components/atoms/Skeleton'
import { SectionTitleSkeleton } from '@/components/molecules/SectionTitleSkeleton/SectionTitleSkeleton'

import { BadgeRow, CareerBlock, PositionCard } from './CareerSectionSkeleton.styles'

function BadgePlaceholders({ count, prefix }: { count: number; prefix: string }) {
  return (
    <BadgeRow>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={`${prefix}-${i}`} width="2.5rem" height="2.5rem" radius="0.35rem" />
      ))}
    </BadgeRow>
  )
}

export function CareerSectionSkeleton() {
  return (
    <Section aria-busy="true" aria-label="Carregando carreira">
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitleSkeleton />
        <CareerBlock>
          <PositionCard>
            <Skeleton width="40%" height="1.5rem" radius="0.5rem" />
            <Skeleton width="60%" height="0.875rem" />
            <Skeleton width="100%" height="0.875rem" />
            <Skeleton width="95%" height="0.875rem" />
            <BadgePlaceholders count={8} prefix="a" />
          </PositionCard>
          <PositionCard>
            <Skeleton width="35%" height="1.5rem" radius="0.5rem" />
            <Skeleton width="55%" height="0.875rem" />
            <Skeleton width="100%" height="0.875rem" />
            <BadgePlaceholders count={6} prefix="b" />
          </PositionCard>
        </CareerBlock>
        <Skeleton width="8rem" height="1.5rem" radius="0.5rem" style={{ margin: '2rem auto' }} />
        <Skeleton width="100%" height="6rem" radius="2rem" />
      </Container>
    </Section>
  )
}
