import { Container } from '@/components/atoms/Container'
import { Section } from '@/components/atoms/Section'
import { ProjectCard } from '@/components/molecules/ProjectCard/ProjectCard'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import content from '@/content/projects/featured.json'

export function FeaturedProjectsSection() {
  return (
    <Section>
      <Container spacing={['verticalXXXXLrg']}>
        <SectionTitle
          title="Destaque"
          preTitle="PROJETOS"
          subTitle="Veja uma amostra dos meus projetos em destaque."
        />
        {content.map((data, index) => (
          <ProjectCard content={data} index={index} key={data.project} />
        ))}
      </Container>
    </Section>
  )
}
