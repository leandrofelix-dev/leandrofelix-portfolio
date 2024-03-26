/* eslint-disable react/no-unescaped-entities */
import Section from '../../structure/section'
import Container from '../../structure/container'

import looking from '../../../styles/scss/sections/index/looking.module.scss'
import section from '../../../styles/scss/blocks/section.title.module.scss'

export default function Looking() {
  return (
    <Section classProp={`${looking.section} borderBottom`}>
      <Container
        classProp={`${section.title} ${looking.container}`}
        spacing={['verticalXXXLrg']}
      >
        <h4>Posso atuar como:</h4>
        <h2 className={looking.json}> &#123;</h2>
        <h2 className={looking.jsonSub}>
          <span>"</span><span className={looking.highlight}>Dev. Frontend</span><span>"</span>,
        </h2>
        <h2 className={looking.jsonSub}>
        <span>"</span><span className={looking.highlight}>Dev. Backend</span><span>"</span>
        </h2>
        <h2 className={looking.json}>&#125;</h2>
      </Container>
    </Section>
  )
}
