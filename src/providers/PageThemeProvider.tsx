import { createGlobalStyle } from 'styled-components'
import { ReactNode } from 'react'

export interface PageColorSet {
  primaryDark?: string
  primaryLight?: string
  secondaryDark?: string
  secondaryLight?: string
}

export interface PageColors {
  dark?: PageColorSet
  light?: PageColorSet
  unicorn?: PageColorSet
}

interface PageThemeProviderProps {
  colors: PageColors
  children: ReactNode
}

function meshOverride(theme: 'dark' | 'light' | 'unicorn', colors?: PageColorSet) {
  if (!colors || Object.keys(colors).length === 0) return null
  return `
    :root[data-theme=${theme}] {
      --mesh-color-1: ${colors.secondaryDark};
      --mesh-color-2: ${colors.secondaryLight};
      --mesh-color-3: ${colors.primaryDark};
      --mesh-color-4: ${colors.primaryLight};
    }
  `
}

function buildPageThemeCss(colors: PageColors) {
  return [
    meshOverride('dark', colors.dark),
    meshOverride('light', colors.light),
    meshOverride('unicorn', colors.unicorn),
  ]
    .filter(Boolean)
    .join('\n')
}

const PageThemeStyle = createGlobalStyle<{ $css: string }>`
  ${({ $css }) => $css}
`

export function PageThemeProvider({ colors, children }: PageThemeProviderProps) {
  const css = buildPageThemeCss(colors)

  return (
    <>
      {css ? <PageThemeStyle $css={css} /> : null}
      <svg aria-hidden="true" focusable="false" style={{ position: 'absolute', width: 0, height: 0 }}>
        <linearGradient id="fa-gradient" x1="0%" y1="0%" x2="175%" y2="175%">
          <stop offset="0%" stopColor="var(--neon-1-2)" />
          <stop offset="100%" stopColor="var(--neon-1-1)" />
        </linearGradient>
      </svg>
      {children}
    </>
  )
}
