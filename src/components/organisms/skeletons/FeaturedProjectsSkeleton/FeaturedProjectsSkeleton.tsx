import { Container } from '@/components/atoms/Container'
import { Section } from '@/components/atoms/Section'
import { ProjectCardSkeleton } from '@/components/molecules/ProjectCardSkeleton/ProjectCardSkeleton'
import { SectionTitleSkeleton } from '@/components/molecules/SectionTitleSkeleton/SectionTitleSkeleton'

export function FeaturedProjectsSkeleton() {
  return (
    <Section aria-busy="true" aria-label="Carregando projetos em destaque">
      <Container spacing={['verticalXXXXLrg']}>
        <SectionTitleSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton reverse />
        <ProjectCardSkeleton />
      </Container>
    </Section>
  )
}
