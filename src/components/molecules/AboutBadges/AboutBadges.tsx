import { BadgeList, BadgeItemData } from '@/components/molecules/BadgeList/BadgeList'
import { CopyCard } from '@/components/organisms/shared/AboutContent.styles'

interface AboutBadgesProps {
  title: string
  copy: string
  list: BadgeItemData[]
  fullContainer?: boolean | string
}

export function AboutBadges({ title, copy, list, fullContainer }: AboutBadgesProps) {
  return (
    <CopyCard>
      <h3>{title}</h3>
      <p>{copy}</p>
      <BadgeList list={list} fullContainer={fullContainer} />
    </CopyCard>
  )
}
