import styled, { css, keyframes } from 'styled-components'

import { media } from '@/theme/media'

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid var(--primary-dark);
  max-height: 1440px;
  height: 100vh;
  justify-content: center;

  > div {
    height: fit-content;
  }
`

export const HeroRow = styled.div`
  position: relative;
  gap: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;

  ${media.mobile} {
    display: none;
  }
`

export const HeroImage = styled.img`
  filter: grayscale(100%);
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`

export const ImageShadow = styled.div<{ $hovered?: boolean }>`
  position: absolute;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  background-color: var(--secondary);
  transition: all 0.3s ease;
  z-index: -1;
  top: ${({ $hovered }) => ($hovered ? '12px' : '8px')};
  left: ${({ $hovered }) => ($hovered ? '12px' : '8px')};
`

export const TextWrapper = styled.div`
  max-width: 50%;

  ${media.mobile} {
    width: 100%;
    max-width: 100%;
  }
`

export const Emoji = styled.span`
  font-size: 1rem;
  animation: wave 2s infinite;

  @keyframes wave {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    25%,
    75% {
      transform: translateY(0) rotate(-10deg);
    }
    50% {
      transform: translateY(0) rotate(10deg);
    }
  }
`

export const PreHeader = styled.div`
  color: var(--secondary);
  font-family: var(--font-accent);
  font-weight: 400;

  h2 {
    margin: 0;
    color: var(--secondary);
    font-family: var(--font-accent);
    font-size: var(--font-r-s);
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.4;
  }

  ${media.mobile} h2 {
    font-size: var(--font-s);
  }
`

export const HeroHeader = styled.h1`
  color: var(--primary-bright);
  font-family: var(--font-sans);
  font-size: 5rem;
  margin: 0;

  ${media.mobile} {
    font-size: 2rem;
  }
`

export const HeroSubtitle = styled.p`
  color: var(--primary-bright);
  margin-top: var(--size-3x);
  margin-bottom: var(--size-3x);
`

export const ButtonRow = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  ${media.mobile} button {
    font-size: 0.875rem;
    padding: 0.75rem 2rem;
  }
`

const fogWaveLR = keyframes`
  0%, 100% { transform: translateY(0) translateX(0) scaleY(1); opacity: 0; }
  50% { transform: translateY(0) translateX(100%) scaleY(2); opacity: 1; }
`

export const HeroBackground = styled.div`
  --hero-gradient-bg-1: var(--neon-1-1);
  --hero-gradient-bg-2: var(--neon-1-2);
  --hero-gradient-bg-3: var(--neon-2-1);
  --hero-gradient-bg-4: var(--neon-2-2);
  position: absolute;
  pointer-events: none;
  inset: 0;
`

export const RadialContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const RadialGradient = styled.div`
  position: absolute;
  width: 100%;
  left: unset;
  aspect-ratio: 1/1;
  height: unset;
  bottom: -60%;
  filter: blur(100px);
  transform: translateZ(0);
  opacity: 20%;
  background: radial-gradient(
    ellipse at center,
    var(--hero-gradient-bg-1) 0%,
    var(--hero-gradient-bg-2) 25%,
    var(--hero-gradient-bg-3) 50%,
    var(--hero-gradient-bg-4) 100%
  );
  z-index: -1;
  animation: ${fogWaveLR} 10s linear infinite;

  ${media.mobile} {
    bottom: -30%;
  }
`

export const IntroRow = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`
