// Section structure
import Section from '../../../structure/section'
import Container from '../../../structure/container'

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss'

export default function Education() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Education"
          preTitle="Formal"
          subTitle="I am currently studying information systems at the Federal Institute of Education, Science and Technology of Ceará."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  Federal Institute of Education, Science and Technology of
                  Ceará
                </h3>
                <h5>Cedro, Ceará, Brazil</h5>
              </span>
              <p>
                I am currently studying an 8-semester degree, in person at IFCE
                Campus Cedro, in Information Systems, and I am currently in the
                6th semester.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  State school of professional education Dr José Iran Costa
                </h3>
                <h5>Várzea Alegre, Ceará, Brazil</h5>
              </span>
              <p>
                I have a technical degree, in the IT area, through EEEP Dr. José
                Iran Costa, with a 3-year degree.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  )
}
