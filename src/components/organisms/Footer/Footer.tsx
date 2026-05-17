import { FaExternalLinkAlt } from 'react-icons/fa'
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaMedium,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

import { Container } from '@/components/atoms/Container'
import content from '@/content/section/footer.json'

import { FooterColumn, FooterGrid, FooterRoot, SocialRow } from './Footer.styles'

const socialIcons: Record<string, JSX.Element> = {
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  medium: <FaMedium />,
  youtube: <FaYoutube />,
  telegram: <FaTelegram />,
  discord: <FaDiscord />,
}

export function Footer() {
  return (
    <FooterRoot>
      <Container spacing={['verticalXXLrg', 'bottomLrg']}>
        <FooterGrid>
          <FooterColumn>
            <li>
              <h4>Projetos</h4>
            </li>
            {content.Websites.map(({ person, link, note }, index) => (
              <li key={index}>
                <a href={link} rel="noreferrer" target="_blank">
                  {person} <FaExternalLinkAlt />
                </a>
                <p>{note}</p>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn>
            <li>
              <h4>Links</h4>
            </li>
            {content.links.map(({ person, link, note }, index) => (
              <li key={index}>
                <a href={link} rel="noreferrer" target="_blank">
                  {person} <FaExternalLinkAlt />
                </a>
                <p>{note}</p>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn>
            <li>
              <h4>Social</h4>
            </li>
            <SocialRow>
              {content.social.map(({ url, icon }, index) => (
                <a key={index} href={url} rel="noreferrer" target="_blank">
                  {socialIcons[icon] ?? <FaExternalLinkAlt />}
                </a>
              ))}
            </SocialRow>
          </FooterColumn>
        </FooterGrid>
      </Container>
      <canvas id="gradient-canvas" data-transition-in="" />
    </FooterRoot>
  )
}
