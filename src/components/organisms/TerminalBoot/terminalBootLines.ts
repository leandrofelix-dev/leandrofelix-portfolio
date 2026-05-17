export interface TerminalBootLine {
  text: string
  delayMs?: number
  type?: 'info' | 'success' | 'muted'
}

export const TERMINAL_BOOT_LINES: TerminalBootLine[] = [
  { text: '$ portfolio init --env production', type: 'muted', delayMs: 400 },
  { text: 'starting processes...', type: 'info', delayMs: 550 },
  { text: 'loading dependencies [react, vite, typescript]...', type: 'info', delayMs: 500 },
  { text: 'preparing build...', type: 'info', delayMs: 600 },
  { text: 'compiling modules...', type: 'info', delayMs: 450 },
  { text: 'optimizing assets...', type: 'info', delayMs: 500 },
  { text: 'applying styled-components theme...', type: 'info', delayMs: 450 },
  { text: 'hydrating interface...', type: 'info', delayMs: 500 },
  { text: 'build complete — portfolio ready.', type: 'success', delayMs: 700 },
]

export const TERMINAL_BOOT_MIN_DURATION_MS = 2800
