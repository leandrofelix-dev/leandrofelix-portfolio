import { BadgeList, BadgeItemData } from '@/components/molecules/BadgeList/BadgeList'
import { Container } from '@/components/atoms/Container'
import { Section } from '@/components/atoms/Section'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { EducationSection } from '@/components/organisms/EducationSection/EducationSection'

import {
  CareerArea,
  CareerRoot,
  CompanyContent,
  CompanyHeader,
  PositionCard,
} from './CareerSection.styles'

const freelancer: BadgeItemData[] = [
  { key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'nodejs', name: 'NodeJS', type: 'devicon' },
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'nextjs', name: 'NextJS', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'mongodb', name: 'MongoDB', type: 'devicon' },
  { key: 'python', name: 'Python', type: 'devicon' },
  { key: 'typescript', name: 'TypeScript', type: 'devicon' },
  { key: 'tailwindcss', name: 'TailwindCSS', type: 'devicon' },
  { key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
  { key: 'yarn', name: 'NPM', type: 'devicon' },
  { key: 'firebase', name: 'Firebase', type: 'devicon' },
  { key: 'flask', name: 'Flask', type: 'devicon' },
]

const G4Flex: BadgeItemData[] = [
  { key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'nodejs', name: 'NodeJS', type: 'devicon' },
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'postgresql', name: 'PostgresSQL', type: 'devicon' },
  { key: 'mongodb', name: 'MongoDB', type: 'devicon' },
  { key: 'typescript', name: 'TypeScript', type: 'devicon' },
  { key: 'yarn', name: 'NPM', type: 'devicon' },
]

const AlfaComunicacao: BadgeItemData[] = [
  { key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'yarn', name: 'Yarn', type: 'devicon' },
]

export function CareerSection() {
  return (
    <Section>
      <CareerRoot className="borderBottom">
        <Container spacing={['verticalXXXLrg']}>
          <SectionTitle
            title="Experiências Profissionais"
            preTitle="Timeline profissional"
            subTitle="Um breve resumo da minha experiência profissional."
          />
          <CareerArea>
            <PositionCard>
              <CompanyContent>
                <CompanyHeader>
                  <h3>G4 Flex Business and Services</h3>
                  <h4>2023 · Atualmente</h4>
                </CompanyHeader>
                <p>
                  Desenvolvimento fullstack web de soluções e produtos comerciais da empresa.
                </p>
              </CompanyContent>
              <BadgeList list={G4Flex} fullContainer />
            </PositionCard>
            <PositionCard>
              <CompanyContent>
                <CompanyHeader>
                  <h3>Alfa Comunicação</h3>
                  <h4>2021 · 2022</h4>
                </CompanyHeader>
                <p>Desenvolvimento frontend no projeto da landing page da empresa.</p>
              </CompanyContent>
              <BadgeList list={AlfaComunicacao} fullContainer />
            </PositionCard>
            <PositionCard>
              <CompanyContent>
                <CompanyHeader>
                  <h3>Freelancer</h3>
                  <h4>2018 · Atualmente</h4>
                </CompanyHeader>
                <p>
                  Prestação de serviços em desenvolvimento web/mobile ocasionais em diversas
                  empresas de tecnologia e outros setores.
                </p>
              </CompanyContent>
              <BadgeList list={freelancer} fullContainer />
            </PositionCard>
          </CareerArea>
        </Container>
        <EducationSection />
      </CareerRoot>
    </Section>
  )
}
