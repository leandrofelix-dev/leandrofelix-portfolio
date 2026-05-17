import { Container } from '@/components/atoms/Container'
import { Section } from '@/components/atoms/Section'

import {
  Highlight,
  JsonBrace,
  JsonLine,
  LookingContainer,
  LookingSectionRoot,
} from './LookingSection.styles'

export function LookingSection() {
  return (
    <Section>
      <LookingSectionRoot className="borderBottom">
        <Container spacing={['verticalXXXLrg']}>
          <LookingContainer>
            <h4>Posso atuar como:</h4>
            <JsonBrace>{'{'}</JsonBrace>
            <JsonLine>
              <span>&quot;</span>
              <Highlight>Dev. Frontend</Highlight>
              <span>&quot;</span>,
            </JsonLine>
            <JsonLine>
              <span>&quot;</span>
              <Highlight>Dev. Backend</Highlight>
              <span>&quot;</span>
            </JsonLine>
            <JsonBrace>{'}'}</JsonBrace>
          </LookingContainer>
        </Container>
      </LookingSectionRoot>
    </Section>
  )
}
