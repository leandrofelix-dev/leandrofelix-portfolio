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

export function AboutSectionSkeleton() {
  return (
    <Section>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitleSkeleton />
        <AboutContent aria-busy="true" aria-label="Carregando sobre">
          <ImageColumn>
            <Skeleton width="100%" height="min(420px, 50vh)" radius="2rem" />
          </ImageColumn>
          <CopyColumn>
            <CopyCard>
              <Skeleton width="6rem" height="1.25rem" />
              <Skeleton width="100%" height="0.875rem" />
              <Skeleton width="100%" height="0.875rem" />
              <Skeleton width="92%" height="0.875rem" />
            </CopyCard>
            <CopyCard>
              <Skeleton width="6rem" height="1.25rem" />
              <Skeleton width="100%" height="0.875rem" />
              <Skeleton width="100%" height="0.875rem" />
              <Skeleton width="88%" height="0.875rem" />
            </CopyCard>
          </CopyColumn>
        </AboutContent>
      </Container>
    </Section>
  )
}
