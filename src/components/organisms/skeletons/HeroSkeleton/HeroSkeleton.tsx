import { Container } from '@/components/atoms/Container'
import { Skeleton } from '@/components/atoms/Skeleton'

import { ButtonRow, HeroRow, HeroSection, ImageArea, TextArea } from './HeroSkeleton.styles'

export function HeroSkeleton() {
  return (
    <HeroSection aria-busy="true" aria-label="Carregando hero">
      <Container spacing={['verticalXXXLrg']}>
        <HeroRow>
          <ImageArea>
            <Skeleton width="100%" height="360px" radius="0.5rem" />
          </ImageArea>
          <TextArea>
            <Skeleton width="8rem" height="1rem" />
            <Skeleton width="100%" height="2.5rem" radius="0.5rem" />
            <Skeleton width="85%" height="2.5rem" radius="0.5rem" />
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="90%" height="1rem" />
            <ButtonRow>
              <Skeleton width="8rem" height="2.75rem" radius="2rem" />
              <Skeleton width="8rem" height="2.75rem" radius="2rem" />
            </ButtonRow>
          </TextArea>
        </HeroRow>
      </Container>
    </HeroSection>
  )
}
