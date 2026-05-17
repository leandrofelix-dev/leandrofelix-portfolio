import { useCallback, useEffect, useRef, useState } from 'react'

import {
  TERMINAL_BOOT_LINES,
  TERMINAL_BOOT_MIN_DURATION_MS,
} from './terminalBootLines'
import {
  BootOverlay,
  Cursor,
  Line,
  Prompt,
  TerminalBody,
  TerminalHeader,
  TerminalTitle,
  TerminalWindow,
  TrafficLight,
} from './TerminalBoot.styles'

const BOOT_SESSION_KEY = 'portfolio-boot-seen'

interface TerminalBootProps {
  onComplete: () => void
}

export function TerminalBoot({ onComplete }: TerminalBootProps) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [exiting, setExiting] = useState(false)
  const startedAt = useRef(Date.now())
  const completedRef = useRef(false)

  const finish = useCallback(() => {
    if (completedRef.current) return
    completedRef.current = true
    setExiting(true)
    window.setTimeout(onComplete, 550)
  }, [onComplete])

  useEffect(() => {
    if (visibleCount >= TERMINAL_BOOT_LINES.length) {
      const elapsed = Date.now() - startedAt.current
      const wait = Math.max(0, TERMINAL_BOOT_MIN_DURATION_MS - elapsed)
      const timer = window.setTimeout(finish, wait)
      return () => window.clearTimeout(timer)
    }

    const line = TERMINAL_BOOT_LINES[visibleCount]
    const delay = line.delayMs ?? 500
    const timer = window.setTimeout(() => {
      setVisibleCount((count) => count + 1)
    }, delay)

    return () => window.clearTimeout(timer)
  }, [visibleCount, finish])

  const lines = TERMINAL_BOOT_LINES.slice(0, visibleCount)
  const isTyping = visibleCount < TERMINAL_BOOT_LINES.length

  return (
    <BootOverlay $exiting={exiting} role="status" aria-live="polite" aria-label="Carregando portfolio">
      <TerminalWindow>
        <TerminalHeader>
          <TrafficLight $color="#ff5f57" />
          <TrafficLight $color="#febc2e" />
          <TrafficLight $color="#28c840" />
          <TerminalTitle>leandrofelix@portfolio — bash</TerminalTitle>
        </TerminalHeader>
        <TerminalBody>
          {lines.map((line, index) => (
            <Line key={`${line.text}-${index}`} $type={line.type}>
              {line.type !== 'muted' && <Prompt>›</Prompt>}
              {line.text}
            </Line>
          ))}
          {isTyping && (
            <Line $type="info" style={{ opacity: 1 }}>
              <Prompt>›</Prompt>
              <Cursor />
            </Line>
          )}
        </TerminalBody>
      </TerminalWindow>
    </BootOverlay>
  )
}

export function shouldShowTerminalBoot(): boolean {
  if (typeof window === 'undefined') return true
  return sessionStorage.getItem(BOOT_SESSION_KEY) !== '1'
}

export function markTerminalBootSeen(): void {
  sessionStorage.setItem(BOOT_SESSION_KEY, '1')
}
