import Section from '../../../structure/section'
import Container from '../../../structure/container'
import SectionTitle from '../../../blocks/section.title'
import career from '../../../../styles/scss/sections/index/career.module.scss'

export default function Education() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Títulos Acadêmicos"
          preTitle="Timeline acadêmica"
          subTitle="Uma pincelada da minha carreira de aprendizado na área de tecnologia."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  Bacharel em Sistemas de Informação
                </h3>
                <h5>Instituto Federal de Educação, Ciência e Tecnologia do Ceará - Cedro, Ceará, Brasil</h5>
              </span>
              <p>
                Graduação em andamento no curso de <b>Sistemas de Informação</b>, a nível de bacharelado, pelo IFCE Campus Cedro, com 4 anos de formação.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  Técnico em Informática
                </h3>
                <h5>Escola Estadual de Educação Profissional Dr. José Iran Costa - Várzea Alegre, Ceará, Brazil</h5>
              </span>
              <p>
                Curso de <b>Informática para desenvolvimento Web</b>, a nível técnico, pela EP Dr. Iran Costa, possuindo um total de 3 anos de formação.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  )
}
