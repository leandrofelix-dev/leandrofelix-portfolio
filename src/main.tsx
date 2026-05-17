import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/App'
import { AppProviders } from '@/providers/AppProviders'

import 'the-new-css-reset/css/reset.css'
import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/600.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import 'devicon/devicon.min.css'
import '@/theme/variables.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)
