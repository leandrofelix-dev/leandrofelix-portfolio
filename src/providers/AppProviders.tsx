import { ReactNode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { domAnimation, LazyMotion } from 'framer-motion'

import { GlobalStyle } from '@/theme/GlobalStyle'

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <HelmetProvider>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <LazyMotion features={domAnimation}>
          {children}
          <Analytics />
          <SpeedInsights />
        </LazyMotion>
      </ThemeProvider>
    </HelmetProvider>
  )
}
