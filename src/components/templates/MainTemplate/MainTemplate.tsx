import { ReactNode } from 'react'

import { BackToTop } from '@/components/atoms/BackToTop/BackToTop'
import { GridGap } from '@/components/atoms/GridGap/GridGap'
import { Footer } from '@/components/organisms/Footer/Footer'
import { Navbar } from '@/components/organisms/Navbar/Navbar'

interface MainTemplateProps {
  children: ReactNode
}

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <GridGap />
    </>
  )
}
