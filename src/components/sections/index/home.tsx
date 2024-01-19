// Core packages
import Image from 'next/image'

// Imports
import Section from '../../structure/section'
import Container from '../../structure/container'

import SectionTitle from '../../blocks/section.title'

import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

import about from '../../../styles/scss/sections/index/about.module.scss'
import React from 'react'

export default function Home() {
  return (
    <Section classProp={about.section}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="Hello! I'm Leandro Felix, an enthusiast and full-stack web developer passionate about turning ideas into interactive and innovative solutions. With a experience in software development, I am committed to creating meaningful and efficient digital experiences. My skills span both front-end and back-end, allowing me to approach projects completely."
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
              copy="Along with my coding proficiency, I possess strong leadership, public speaking, time management, and multitasking skills that I have honed throughout my professional career. I have soft skills certification from StartSe Tech Academy and I constantly look for opportunities to expand my knowledge and stay up to date with the latest market trends."
            />
            <CopyBlock
              title="Development and Projects"
              containerClass={about.container}
              iconClass={about.icon}
              icon={['fas', 'code']}
              copy="Project development and execution are my passion. I thrive on the challenges of bringing ideas to life through coding and transforming concepts into functional, robust solutions. With meticulous planning, efficient workflows and a keen eye for detail, I ensure successful project delivery, achieving objectives and exceeding expectations."
            />
          </div>
        </section>
      </Container>
    </Section>
  )
}
