import { Container } from '@/components/atoms/Container'
import { Section } from '@/components/atoms/Section'
import { Skeleton } from '@/components/atoms/Skeleton'

import { JsonBlock, LookingRoot } from './LookingSectionSkeleton.styles'

export function LookingSectionSkeleton() {
  return (
    <Section>
      <LookingRoot className="borderBottom">
        <Container spacing={['verticalXXXLrg']}>
          <JsonBlock aria-busy="true" aria-label="Carregando seção">
            <Skeleton width="10rem" height="1.25rem" />
            <Skeleton width="1.5rem" height="1rem" />
            <Skeleton width="min(280px, 90%)" height="1rem" />
            <Skeleton width="min(240px, 80%)" height="1rem" />
            <Skeleton width="1.5rem" height="1rem" />
          </JsonBlock>
        </Container>
      </LookingRoot>
    </Section>
  )
}
