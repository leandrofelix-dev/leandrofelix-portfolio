import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaCode, FaLinkedinIn } from 'react-icons/fa'

import { Container } from '@/components/atoms/Container'
import content from '@/content/index/hero.json'

import {
  ButtonRow,
  Emoji,
  HeroBackground,
  HeroHeader,
  HeroImage,
  HeroSection,
  HeroSubtitle,
  HeroRow,
  ImageShadow,
  ImageWrapper,
  IntroRow,
  PreHeader,
  RadialContainer,
  RadialGradient,
  TextWrapper,
} from './Hero.styles'

function SectionBackground() {
  return (
    <HeroBackground className="noEvents">
      <RadialContainer className="noEvents">
        <RadialGradient />
      </RadialContainer>
    </HeroBackground>
  )
}

export function Hero() {
  const [, setTypingStatus] = useState('Initializing')
  const [isImageHovered, setIsImageHovered] = useState(false)

  return (
    <HeroSection>
      <Container spacing={['verticalXXXLrg']}>
        <HeroRow>
          <ImageWrapper
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <HeroImage src="/img/picture.jpeg" alt="Leandro Felix" loading="lazy" />
            <ImageShadow $hovered={isImageHovered} />
          </ImageWrapper>
          <TextWrapper>
            <IntroRow>
              <Emoji>👋</Emoji>
              <PreHeader>
                <TypeAnimation
                  sequence={[
                    content.intro.startDelay,
                    () => setTypingStatus('typing'),
                    content.intro.start,
                    () => setTypingStatus('typed'),
                    content.intro.deleteDelay,
                    () => setTypingStatus('deleting'),
                    content.intro.end,
                    () => setTypingStatus('deleted'),
                    content.intro.restartDelay,
                  ]}
                  speed={content.intro.speed as never}
                  deletionSpeed={content.intro.deletionSpeed as never}
                  wrapper={content.intro.wrapper as never}
                  repeat={Infinity}
                />
              </PreHeader>
            </IntroRow>
            <section>
              <HeroHeader>{content.header.name}</HeroHeader>
              <HeroHeader>{content.header.usp}</HeroHeader>
            </section>
            <section>
              <HeroSubtitle className="subtitle">{content.paragraph}</HeroSubtitle>
            </section>
            <ButtonRow>
              <button
                type="button"
                className="button primary"
                onClick={() => {
                  window.location.href = '/projects'
                }}
              >
                <FaCode />
                {content.buttons.primary.title}
              </button>
              <button
                type="button"
                className="button secondary leaveSite"
                onClick={() =>
                  window.open('https://www.linkedin.com/in/leandrofelixdev/', '_blank')
                }
              >
                <FaLinkedinIn />
                {content.buttons.secondary.title}
              </button>
            </ButtonRow>
          </TextWrapper>
        </HeroRow>
      </Container>
      <SectionBackground />
    </HeroSection>
  )
}
