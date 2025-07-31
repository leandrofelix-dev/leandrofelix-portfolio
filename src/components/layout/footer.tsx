import Container from '../structure/container'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaMedium,
  FaYoutube,
  FaTelegram,
  FaDiscord
} from 'react-icons/fa'

import content from '../../content/section/footer.json'

// Mapeamento de ícones sociais
const socialIcons: { [key: string]: JSX.Element } = {
  'github': <FaGithub />,
  'linkedin': <FaLinkedin />,
  'twitter': <FaTwitter />,
  'instagram': <FaInstagram />,
  'medium': <FaMedium />,
  'youtube': <FaYoutube />,
  'telegram': <FaTelegram />,
  'discord': <FaDiscord />
}

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col relative">
      <Container spacing={['verticalXXLrg', 'bottomLrg']}>
        <section className="flex flex-row gap-8">
          <ul className="w-full">
            <li>
              <h4 className="mb-1x">Projetos</h4>
            </li>
            {content.Websites.map(({ person, link, note }, index) => {
              return (
                <li key={index} className="mb-2-">
                  <a href={link} rel="noreferrer" target="_blank" className="text-sm font-semibold text-primary hover:text-primary-bright">
                    {person}{' '}
                    <FaExternalLinkAlt className="inline h-3 ml-1" />
                  </a>
                  <p className="text-sm">{note}</p>
                </li>
              )
            })}
          </ul>
          <ul className="w-full">
            <li>
              <h4 className="mb-1x">Links</h4>
            </li>
            {content.links.map(({ person, link, note }, index) => {
              return (
                <li key={index} className="mb-2-">
                  <a href={link} rel="noreferrer" target="_blank" className="text-sm font-semibold text-primary hover:text-primary-bright">
                    {person}{' '}
                    <FaExternalLinkAlt className="inline h-3 ml-1" />
                  </a>
                  <p className="text-sm">{note}</p>
                </li>
              )
            })}
          </ul>
          <ul>
            <li>
              <h4 className="mb-1x">Social</h4>
            </li>
            <li className="flex flex-row gap-4">
              {content.social.map(({ url, icon }, index) => {
                return (
                  <a key={index} href={url} rel="noreferrer" target="_blank">
                    <div className="h-8 w-8 flex items-center justify-center">
                      {socialIcons[icon] || <FaExternalLinkAlt />}
                    </div>
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
