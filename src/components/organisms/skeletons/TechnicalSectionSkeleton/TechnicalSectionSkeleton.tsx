import { Container } from '@/components/atoms/Container'
import { Section } from '@/components/atoms/Section'
import { Skeleton } from '@/components/atoms/Skeleton'
import { SectionTitleSkeleton } from '@/components/molecules/SectionTitleSkeleton/SectionTitleSkeleton'
import {
  AboutContent,
  CopyCard,
  CopyColumn,
  ImageColumn,
} from '@/components/organisms/shared/AboutContent.styles'

import { BadgeGrid } from './TechnicalSectionSkeleton.styles'

export function TechnicalSectionSkeleton() {
  return (
    <Section>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitleSkeleton />
        <AboutContent aria-busy="true" aria-label="Carregando stack técnica">
          <ImageColumn $technical>
            <Skeleton width="100%" height="20rem" radius="2rem" />
          </ImageColumn>
          <CopyColumn>
            <CopyCard>
              <Skeleton width="8rem" height="1.25rem" />
              <Skeleton width="100%" height="2.5rem" radius="0.5rem" />
            </CopyCard>
            <BadgeGrid>
              {Array.from({ length: 12 }).map((_, i) => (
                <Skeleton key={i} width="3rem" height="3rem" radius="0.5rem" />
              ))}
            </BadgeGrid>
          </CopyColumn>
        </AboutContent>
      </Container>
    </Section>
  )
}
