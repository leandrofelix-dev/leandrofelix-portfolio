import { Container } from '@/components/atoms/Container'
import { Section } from '@/components/atoms/Section'
import { AboutCopy } from '@/components/molecules/AboutCopy/AboutCopy'
import { SectionTitle } from '@/components/molecules/SectionTitle'

import {
  AboutContent,
  CopyColumn,
  ImageColumn,
} from '../shared/AboutContent.styles'

export function AboutSection() {
  return (
    <Section>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Sobre Mim"
          preTitle="Resumo"
          subTitle="Olá! Me chamo Leandro Félix e sou Analista de Sistemas e Programador. Possuo experiência em aplicações web completas e robustas, atuando em todas as frentes do desenvolvimento de software e sempre buscando entender a real necessidade dos sistemas e suas regras de negócio."
        />
        <AboutContent>
          <ImageColumn>
            <img src="/img/picture.jpeg" alt="Leandro Felix" loading="eager" />
          </ImageColumn>
          <CopyColumn>
            <AboutCopy
              title="Soft Skills"
              copy="Além dos meus conhecimentos em programação, possuo um senso de liderança, gerenciamento de tempo e de multitarefas que adquiri ao longo da minha carreira profissional. Possuo certificações em Soft Skills pela StartSe Tech Academy. Pra completar, adoro aprender coisas novas e estou por dentro das tendências e novidades na tecnologia. Sou dedicado, criativo e apaixonado pelo o que faço."
            />
            <AboutCopy
              title="Hard Skills"
              copy="O desenvolvimento e execução do projeto de tecnologia são as minhas paixões. Adoro o desafio de dar vida às ideias por meio da codificação, transformando conceitos em soluções funcionais e robustas. Com um planejamento pensando nos mínimos detalhes e fluxos de trabalho eficientes, garanto a entrega bem sucedida dos projetos, alcançando objetivos e expectativas."
            />
          </CopyColumn>
        </AboutContent>
      </Container>
    </Section>
  )
}
