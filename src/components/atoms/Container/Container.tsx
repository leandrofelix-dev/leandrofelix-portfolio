import { ReactNode } from 'react'

import { StyledContainer } from './Container.styles'

export interface ContainerProps {
  className?: string
  spacing?: string | string[]
  children: ReactNode
}

export function Container({ className, spacing, children }: ContainerProps) {
  return (
    <StyledContainer className={className} $spacing={spacing}>
      {children}
    </StyledContainer>
  )
}
