import { useEffect } from 'react'
import { m, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Badges({ list, block, color, fullContainer }) {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  const container = {
    hidden: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.025,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.025,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: {
      y: 20,
      opacity: -0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  // Base classes for badges
  const getListClasses = () => {
    let classes = 'relative z-10 flex flex-row flex-wrap gap-2- font-accent font-semibold text-xs list-none'
    
    if (block === 'methods') {
      return classes
    }
    
    return classes
  }

  const getItemClasses = () => {
    let classes = 'relative flex flex-row overflow-hidden items-center rounded-full uppercase text-primary-dim'
    
    if (block === 'methods') {
      classes += ' p-2 px-4 text-sm font-semibold rounded-lg w-[calc(50%-0.25rem)] capitalize'
    } else {
      classes += ' px-3- py-3-'
    }
    
    if (color === false) {
      // inverted color styling would go here
    }
    
    return classes
  }

  const getContainerClasses = () => {
    let classes = ''
    
    if (fullContainer) {
      classes = 'border-t border-primary-dark bg-background-dim -mx-[var(--padding-left)] -mr-[var(--padding-right)] -mb-[var(--padding-bottom)] p-[var(--padding)] pl-[var(--padding-left)] pt-[var(--padding-top,1rem)] pr-[var(--padding-right)] pb-[var(--padding-bottom)]'
    }
    
    return classes
  }

  return (
    <m.ul
      className={`${getListClasses()} ${getContainerClasses()}`}
      // Animations
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      whileHover="hover"
    >
      {list.map(({ key, name, type }) => {
        return (
          <m.li
            key={name}
            className={`${getItemClasses()} ${key} group relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-10 before:border before:border-primary-dim before:rounded-full before:opacity-10 after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:-z-10 after:bg-background-dim2 after:opacity-100`}
            // Animations
            variants={item}
          >
            <IconModule iconKey={key} iconType={type} color={color} />
            <span className="flex-grow text-center">{name}</span>
          </m.li>
        )
      })}
    </m.ul>
  )
}

function IconModule({ iconKey, iconType, color }) {
  let colored = 'colored'
  if (color === false) {
    colored = ''
  }

  const iconClasses = 'flex justify-center items-center mr-3 h-4 p-0.5'

  switch (iconType) {
    case 'devicon':
      return <i className={`devicon-${iconKey}-plain ${colored} ${iconClasses}`} />
    default:
      return <div className={iconClasses}></div>
  }
}
