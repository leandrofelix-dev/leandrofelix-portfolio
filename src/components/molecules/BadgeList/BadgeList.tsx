import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { BadgeItem, BadgeListRoot } from './BadgeList.styles'

export interface BadgeItemData {
  key: string
  name: string
  type?: string
}

interface BadgeListProps {
  list: BadgeItemData[]
  block?: string
  color?: boolean
  fullContainer?: boolean | string
}

export function BadgeList({ list, fullContainer }: BadgeListProps) {
  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false })

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [controls, inView])

  const container = {
    hidden: { opacity: 1, transition: { delayChildren: 0.25, staggerChildren: 0.025 } },
    visible: { opacity: 1, transition: { delayChildren: 0.025, staggerChildren: 0.1 } },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <BadgeListRoot
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      $fullContainer={Boolean(fullContainer)}
    >
      {list.map(({ key, name, type }) => (
        <BadgeItem key={name} variants={item}>
          {type === 'devicon' ? (
            <i className={`devicon-${key}-plain colored`} />
          ) : null}
          <span>{name}</span>
        </BadgeItem>
      ))}
    </BadgeListRoot>
  )
}
