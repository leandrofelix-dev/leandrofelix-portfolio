import { Container } from '@/components/atoms/Container'
import { Section } from '@/components/atoms/Section'
import { SectionTitle } from '@/components/molecules/SectionTitle'

import {
  CareerArea,
  CompanyContent,
  CompanyHeader,
  PositionCard,
} from '../CareerSection/CareerSection.styles'

export function EducationSection() {
  return (
    <Section>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Títulos Acadêmicos"
          preTitle="Timeline acadêmica"
          subTitle="Uma pincelada da minha carreira de aprendizado na área de tecnologia."
        />
        <CareerArea>
          <PositionCard as="article">
            <CompanyContent>
              <CompanyHeader>
                <h3>Bacharel em Sistemas de Informação</h3>
                <h5>
                  Instituto Federal de Educação, Ciência e Tecnologia do Ceará - Cedro,
                  Ceará, Brasil
                </h5>
              </CompanyHeader>
              <p>
                Graduação em andamento no curso de <b>Sistemas de Informação</b>, a nível de
                bacharelado, pelo IFCE Campus Cedro, com 4 anos de formação.
              </p>
            </CompanyContent>
          </PositionCard>
          <PositionCard as="article">
            <CompanyContent>
              <CompanyHeader>
                <h3>Técnico em Informática</h3>
                <h5>
                  Escola Estadual de Educação Profissional Dr. José Iran Costa - Várzea
                  Alegre, Ceará, Brazil
                </h5>
              </CompanyHeader>
              <p>
                Curso de <b>Informática para desenvolvimento Web</b>, a nível técnico, pela EP
                Dr. Iran Costa, possuindo um total de 3 anos de formação.
              </p>
            </CompanyContent>
          </PositionCard>
        </CareerArea>
      </Container>
    </Section>
  )
}
