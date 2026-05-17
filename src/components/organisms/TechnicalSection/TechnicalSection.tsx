import { Container } from '@/components/atoms/Container'
import { Section } from '@/components/atoms/Section'
import { AboutBadges } from '@/components/molecules/AboutBadges/AboutBadges'
import { BadgeItemData } from '@/components/molecules/BadgeList/BadgeList'
import { SectionTitle } from '@/components/molecules/SectionTitle'

import {
  AboutContent,
  CopyColumn,
  ImageColumn,
} from '../shared/AboutContent.styles'

const software: BadgeItemData[] = [
  { key: 'photoshop', name: 'Photoshop', type: 'devicon' },
  { key: 'illustrator', name: 'Illustrator', type: 'devicon' },
  { key: 'figma', name: 'Figma', type: 'devicon' },
]

const tech: BadgeItemData[] = [
  { key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'nodejs', name: 'NodeJS', type: 'devicon' },
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'nextjs', name: 'NextJS', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'mongodb', name: 'MongoDB', type: 'devicon' },
  { key: 'typescript', name: 'TypeScript', type: 'devicon' },
  { key: 'tailwindcss', name: 'TailwindCSS', type: 'devicon' },
  { key: 'npm', name: 'npm', type: 'devicon' },
  { key: 'yarn', name: 'Yarn', type: 'devicon' },
  { key: 'firebase', name: 'Firebase', type: 'devicon' },
  { key: 'python', name: 'Python', type: 'devicon' },
  { key: 'flask', name: 'Flask', type: 'devicon' },
]

export function TechnicalSection() {
  return (
    <Section>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Técnico"
          preTitle="Hard Skills"
          subTitle="Conheça um pouco das minhas habilidades como um profissional de tecnologia."
        />
        <AboutContent>
          <CopyColumn>
            <AboutBadges
              title="Desenvolvimento de Software"
              copy="Tenho seguido na carreira de programador desde 2018, com foco principal nos estudos. Nesses anos em que estive na área dominei ferramentas como essas listadas abaixo: "
              list={tech}
              fullContainer
            />
            <AboutBadges
              title="Design"
              copy="Como um apaixonado por design e interfaces, possuo habilidades em diversas ferramentas gráficas para criação, como esses listados abaixo:"
              list={software}
              fullContainer
            />
          </CopyColumn>
          <ImageColumn $technical>
            <img src="/img/dataism-24.svg" alt="data string background" loading="eager" />
          </ImageColumn>
        </AboutContent>
      </Container>
    </Section>
  )
}
