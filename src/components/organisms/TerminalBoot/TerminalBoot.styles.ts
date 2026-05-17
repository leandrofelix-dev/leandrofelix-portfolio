import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`

const blink = keyframes`
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
`

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
`

export const BootOverlay = styled.div<{ $exiting?: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0b0c;
  padding: 1.5rem;
  animation: ${({ $exiting }) => ($exiting ? fadeOut : 'none')} 0.55s ease forwards;
  pointer-events: ${({ $exiting }) => ($exiting ? 'none' : 'auto')};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(22, 163, 74, 0.03) 50%,
      transparent 100%
    );
    animation: ${scanline} 4s linear infinite;
    pointer-events: none;
    opacity: 0.35;
  }
`

export const TerminalWindow = styled.div`
  position: relative;
  width: min(640px, 100%);
  border-radius: 0.75rem;
  border: 1px solid var(--primary-dark);
  background: var(--background-dim2);
  box-shadow:
    0 0 0 1px rgba(22, 163, 74, 0.15),
    0 24px 48px rgba(0, 0, 0, 0.45);
  overflow: hidden;
`

export const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1rem;
  background: var(--background-dim);
  border-bottom: 1px solid var(--primary-dark);
`

export const TrafficLight = styled.span<{ $color: string }>`
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`

export const TerminalTitle = styled.span`
  margin-left: 0.5rem;
  font-family: var(--font-accent);
  font-size: var(--font-xs);
  color: var(--primary-dim);
`

export const TerminalBody = styled.div`
  padding: 1.25rem 1rem 1.5rem;
  font-family: var(--font-accent);
  font-size: clamp(0.8rem, 2.5vw, 0.95rem);
  line-height: 1.65;
  min-height: 12rem;
`

export const Line = styled.div<{ $type?: 'info' | 'success' | 'muted' }>`
  color: ${({ $type }) => {
    if ($type === 'success') return 'var(--secondary-bright)'
    if ($type === 'muted') return 'var(--primary-dim)'
    return 'var(--primary)'
  }};
  opacity: 0;
  animation: lineIn 0.2s ease forwards;

  @keyframes lineIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const Cursor = styled.span`
  display: inline-block;
  width: 0.55em;
  height: 1em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: var(--secondary);
  animation: ${blink} 1s step-end infinite;
`

export const Prompt = styled.span`
  color: var(--secondary);
  margin-right: 0.35rem;
`
