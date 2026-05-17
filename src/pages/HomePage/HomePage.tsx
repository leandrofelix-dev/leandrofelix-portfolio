import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'

import {
  AboutSectionSkeleton,
  CareerSectionSkeleton,
  FeaturedProjectsSkeleton,
  HeroSkeleton,
  LookingSectionSkeleton,
  TechnicalSectionSkeleton,
} from '@/components/organisms/skeletons'
import { PageThemeProvider } from '@/providers/PageThemeProvider'
import colors from '@/content/index/_colors.json'

const Hero = lazy(() =>
  import('@/components/organisms/Hero/Hero').then((m) => ({ default: m.Hero })),
)
const LookingSection = lazy(() =>
  import('@/components/organisms/LookingSection/LookingSection').then((m) => ({
    default: m.LookingSection,
  })),
)
const AboutSection = lazy(() =>
  import('@/components/organisms/AboutSection/AboutSection').then((m) => ({
    default: m.AboutSection,
  })),
)
const FeaturedProjectsSection = lazy(() =>
  import('@/components/organisms/FeaturedProjectsSection/FeaturedProjectsSection').then(
    (m) => ({ default: m.FeaturedProjectsSection }),
  ),
)
const TechnicalSection = lazy(() =>
  import('@/components/organisms/TechnicalSection/TechnicalSection').then((m) => ({
    default: m.TechnicalSection,
  })),
)
const CareerSection = lazy(() =>
  import('@/components/organisms/CareerSection/CareerSection').then((m) => ({
    default: m.CareerSection,
  })),
)

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Leandro Felix - Analista de Sistemas | Portfolio</title>
        <meta name="description" content="Leandro Felix - Analista de Sistemas" />
      </Helmet>
      <PageThemeProvider colors={colors}>
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LookingSectionSkeleton />}>
          <LookingSection />
        </Suspense>
        <Suspense fallback={<AboutSectionSkeleton />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<FeaturedProjectsSkeleton />}>
          <FeaturedProjectsSection />
        </Suspense>
        <Suspense fallback={<TechnicalSectionSkeleton />}>
          <TechnicalSection />
        </Suspense>
        <Suspense fallback={<CareerSectionSkeleton />}>
          <CareerSection />
        </Suspense>
      </PageThemeProvider>
    </>
  )
}
