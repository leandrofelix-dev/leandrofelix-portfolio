import { ReactNode } from 'react'

import { StyledSection } from './Section.styles'

export interface SectionProps {
  className?: string
  children: ReactNode
}

export function Section({ className, children }: SectionProps) {
  return <StyledSection className={className}>{children}</StyledSection>
}
