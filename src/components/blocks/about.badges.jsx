import { 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaMobile, 
  FaTools, 
  FaGraduationCap,
  FaUser,
  FaHeart
} from 'react-icons/fa'
import Badges from '../utils/badge.list'

import badges from '../../styles/scss/blocks/badges.module.scss'

// Mapeamento de ícones
const iconMap = {
  'code': <FaCode />,
  'database': <FaDatabase />,
  'server': <FaServer />,
  'mobile': <FaMobile />,
  'tools': <FaTools />,
  'graduation-cap': <FaGraduationCap />,
  'user': <FaUser />,
  'heart': <FaHeart />
}

export default function BadgesBlock({
  title,
  copy,
  list,
  fullContainer,
  block,
  icon,
  invertedColor,
  headerIcon,
  containerClass,
}) {
  return (
    <div className={`${badges.badgeBlockContainer} ${containerClass}`}>
      <span className={headerIcon}>
        {iconMap[icon] || <FaCode />}
      </span>
      <h3>{title}</h3>
      <Copy copy={copy} />
      <Badges
        list={list}
        block={block}
        invertedColor={invertedColor}
        fullContainer={fullContainer}
      />
    </div>
  )
}

function Copy({ copy }) {
  if (copy) return <p>{copy}</p>
}
