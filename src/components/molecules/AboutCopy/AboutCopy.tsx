import { CopyCard } from '@/components/organisms/shared/AboutContent.styles'

export interface AboutCopyProps {
  title: string
  copy: string
}

export function AboutCopy({ title, copy }: AboutCopyProps) {
  return (
    <CopyCard>
      <h3>{title}</h3>
      <p>{copy}</p>
    </CopyCard>
  )
}
