import Image from 'next/image'

import Section from '../../structure/section'
import Container from '../../structure/container'
import SectionTitle from '../../blocks/section.title'
import BadgesBlock from '../../blocks/about.badges'
import technical from '../../../styles/scss/sections/index/about.module.scss'

export default function Technical() {
  return (
    <Section classProp={`${technical.section} borderBottom`}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Técnico"
          preTitle="Hard Skills"
          subTitle="Conheça um pouco das minhas habilidades como um profissional de tecnologia."
        />
        <section className={`${technical.content} ${technical.container}`}>
          <div className={technical.copy}>
            <BadgesBlock
              title="Desenvolvimento de Software"
              copy="Tenho seguido na carreira de programador desde 2018, com foco principal nos estudos. Nesses anos em que estive na área dominei ferramentas como essas listadas abaixo: "
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={technical.container}
              headerIcon={technical.icon}
              invertedColor={undefined}
            />
            <BadgesBlock
              title="Design"
              copy="Como um apaixonado por design e interfaces, possuo habilidades em diversas ferramentas gráficas para criação, como esses listados abaixo:"
              list={software}
              block="tech"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={technical.container}
              headerIcon={technical.icon}
              invertedColor={undefined}
            />
          </div>
          <div className={`${technical.image} ${technical.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="data string background"
              loading="eager"
            />
          </div>
        </section>
      </Container>
    </Section>
  )
}
const software = [
  { key: 'photoshop', name: 'Photoshop', type: 'devicon' },
  { key: 'illustrator', name: 'Illustrator', type: 'devicon' },
  { key: 'figma', name: 'Figma', type: 'devicon' },
]

const tech = [
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
  { key: 'tailwind', name: 'TailwindCSS', type: 'devicon' },
  { key: 'npm', name: 'npm', type: 'devicon' },
  { key: 'yarn', name: 'Yarn', type: 'devicon' },
  { key: 'firebase', name: 'Firebase', type: 'devicon' },
  { key: 'python', name: 'Python', type: 'devicon' },
  { key: 'flask', name: 'Flask', type: 'devicon' },
]
