import { useEffect } from 'react'
import { m, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { BadgeList, BadgeItemData } from '@/components/molecules/BadgeList/BadgeList'

import {
  Details,
  HeaderRow,
  ImageContainer,
  PrivateOr,
  ProjectHeader,
  ProjectRoot,
  ViewProject,
} from './ProjectCard.styles'

export interface FeaturedProjectContent {
  project: string
  url?: string
  repo: string
  descriptionTitle: string
  description: string
  stack: BadgeItemData[]
  images: { key: string; url: string; hover?: string; h: string | number; w: string | number }[]
}

interface ProjectCardProps {
  content: FeaturedProjectContent
  index: number
}

export function ProjectCard({ content, index }: ProjectCardProps) {
  const { project, url, repo, descriptionTitle, description, stack, images } = content

  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: false })

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [controls, inView])

  const container = {
    hidden: { transition: { delayChildren: 0.125, staggerChildren: 0.0625 } },
    visible: { transition: { delayChildren: 0.125, staggerChildren: 0.25 } },
    rest: { transition: { delayChildren: 0, staggerChildren: 0 } },
    hover: { transition: { delayChildren: 0, staggerChildren: 0 } },
  }

  const item = {
    hidden: { y: 75, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <ProjectRoot
      ref={ref}
      $reverse={index % 2 === 1}
      variants={container}
      initial={['rest', 'hidden']}
      whileHover="hover"
      animate={controls}
      onClick={() => url && window.open(url, '_blank')}
      style={{ cursor: url ? 'pointer' : 'default' }}
    >
      <Details>
        <ProjectHeader>
          <HeaderRow>
            <h3 className="highlight">{project}</h3>
            <PrivateOr>
              <i className="devicon-github-plain" /> {repo}
            </PrivateOr>
          </HeaderRow>
          <p>
            <strong>{descriptionTitle}</strong> {description}
          </p>
          <BadgeList list={stack} />
          <ViewProject variants={item}>
            <FaExternalLinkAlt />
          </ViewProject>
        </ProjectHeader>
      </Details>
      <ImageContainer>
        {images.map((image) => (
          <m.div key={image.key} variants={item}>
            <img src={image.url} alt={project} width={image.w} height={image.h} loading="eager" />
          </m.div>
        ))}
      </ImageContainer>
    </ProjectRoot>
  )
}
