import Image from 'next/image'

import Section from '../../structure/section'
import Container from '../../structure/container'

import SectionTitle from '../../blocks/section.title'
import CopyBlock from '../../blocks/about.copy'

import about from '../../../styles/scss/sections/index/about.module.scss'
import React from 'react'

export default function Home() {
  return (
    <Section classProp={about.section}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Sobre Mim"
          preTitle="Resumo"
          subTitle="Olá! Sou Leandro Félix, um desenvolvedor web full-stack apaixonado por transformar ideias em soluções digitais! Com habilidades tanto de front-end quanto de back-end, estou aqui para criar experiências projetos eficientes e escaláveis. Vamos juntos, desenvolver seu projeto dos sonhos? 💚"
        />
        <section className={about.content}>
          <div className={about.image}>
            <Image
              src="/img/picture.jpeg"
              width={600}
              height={800}
              alt="Leandro Felix"
              loading="eager"
            />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Soft Skills"
              containerClass={about.container}
              iconClass={about.icon}
              icon={['fas', 'user']}
              copy="Além dos meus conhecimentos em programação, possuo um forte senso de liderança e desenvoltura em público, gerenciamento de tempo e de multitarefas que adquiri ao longo da minha carreira profissional. Possuo certificações em Soft Skills pela StartSe Tech Academy. Pra completar, adoro aprender coisas novas e estou por dentro das tendências e novidades na tecnologia. Sou dedicado, criativo e apaixonado pelo o que faço."
            />
            <CopyBlock
              title="Hard Skills"
              containerClass={about.container}
              iconClass={about.icon}
              icon={['fas', 'code']}
              copy="O desenvolvimento e execução do projeto de tecnologia são as minhas paixões. Adoro o desafio de dar vida às ideias por meio da codificação, transformando conceitos em soluções funcionais e robustas. Com um planejamento pensando nos mínimos detalhes e fluxos de trabalho eficientes, garanto a entrega bem sucedida dos projetos, alcançando objetivos e expectativas."
            />
          </div>
        </section>
      </Container>
    </Section>
  )
}
