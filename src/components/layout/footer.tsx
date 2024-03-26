import Container from '../structure/container'
import Icon from '../utils/icon'

import css from '../../styles/scss/structure/footer.module.scss'

import content from '../../content/section/footer.json'

export default function Footer(): JSX.Element {
  return (
    <footer className={css.container}>
      <Container spacing={['verticalXXLrg', 'bottomLrg']}>
        <section className={css.sections}>
          <ul className={css.thanks}>
            <li>
              <h4>Projetos</h4>
            </li>
            {content.Websites.map(({ person, link, note }, index) => {
              return (
                <li key={index}>
                  <a href={link} rel="noreferrer" target="_blank">
                    {person}{' '}
                    <Icon icon={['fad', 'arrow-up-right-from-square']} />
                  </a>
                  <p>{note}</p>
                </li>
              )
            })}
          </ul>
          <ul className={css.links}>
            <li>
              <h4>Links</h4>
            </li>
            {content.links.map(({ person, link, note }, index) => {
              return (
                <li key={index}>
                  <a href={link} rel="noreferrer" target="_blank">
                    {person}{' '}
                    <Icon icon={['fad', 'arrow-up-right-from-square']} />
                  </a>
                  <p>{note}</p>
                </li>
              )
            })}
          </ul>
          <ul className={css.social}>
            <li>
              <h4>Social</h4>
            </li>
            <li className={css.socialList}>
              {content.social.map(({ url, icon }, index) => {
                return (
                  <a key={index} href={url} rel="noreferrer" target="_blank">
                    <Icon icon={['fab', icon] as any} />
                  </a>
                )
              })}
            </li>
          </ul>
        </section>
      </Container>
      <canvas id="gradient-canvas" data-transition-in=""></canvas>
    </footer>
  )
}
