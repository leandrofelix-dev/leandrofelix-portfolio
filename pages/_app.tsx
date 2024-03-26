import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { domAnimation, LazyMotion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Layout from '../src/components/layout/layout'
import SetGridGap from '../src/components/utils/set.grid'
import '../node_modules/the-new-css-reset/css/reset.css'
import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/600.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '../node_modules/devicon/devicon.min.css'
import '../src/styles/css/variables.css'
import '../src/styles/css/global.css'
import '../src/styles/css/utils/splash.css'
import '../src/styles/css/utils/chatbot.css'
import '../src/styles/css/utils/backtotop.css'
import '../src/styles/css/sections/404.css'
import '../src/styles/css/utils/anim.css'

const BackToTop = dynamic(() => import('../src/components/utils/backtotop'))

interface AppProps {
  Component: React.ElementType
  pageProps: any
}

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <SpeedInsights /> {/* Análise de desempenho do site */}
    <LazyMotion features={domAnimation}> {/* Animação das animações dos projetos */}
      <Layout> {/* Adiciona NavBar e Footer */}
        <Component {...pageProps} />
        <Analytics /> {/* Análise de tráfego do site */}
        <SetGridGap /> {/* Adiciona grid gap para o layout */}
      </Layout>
      <BackToTop /> {/* Botão de voltar ao topo */}
    </LazyMotion> 
  </>
)

export default App
