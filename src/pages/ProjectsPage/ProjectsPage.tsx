import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import {
  FeaturedProjectsSkeleton,
  RecentProjectsSkeleton,
} from '@/components/organisms/skeletons'
import { PageThemeProvider } from '@/providers/PageThemeProvider'
import colors from '@/content/projects/_colors.json'
import { fetchGitHubPortfolio, GitHubRepo, GitHubUser } from '@/services/github'

const FeaturedProjectsSection = lazy(() =>
  import('@/components/organisms/FeaturedProjectsSection/FeaturedProjectsSection').then(
    (m) => ({ default: m.FeaturedProjectsSection }),
  ),
)
const RecentProjectsSection = lazy(() =>
  import('@/components/organisms/RecentProjectsSection/RecentProjectsSection').then(
    (m) => ({ default: m.RecentProjectsSection }),
  ),
)

export function ProjectsPage() {
  const [user, setUser] = useState<GitHubUser[] | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const cached = sessionStorage.getItem('github-portfolio')
    if (cached) {
      try {
        const parsed = JSON.parse(cached) as { user: GitHubUser[]; repos: GitHubRepo[] }
        setUser(parsed.user)
        setRepos(parsed.repos)
        return
      } catch {
        sessionStorage.removeItem('github-portfolio')
      }
    }

    fetchGitHubPortfolio()
      .then((data) => {
        setUser(data.user)
        setRepos(data.repos)
        sessionStorage.setItem('github-portfolio', JSON.stringify(data))
      })
      .catch(() => setError('Não foi possível carregar os projetos do GitHub.'))
  }, [])

  const loadingGitHub = !error && !repos

  return (
    <>
      <Helmet>
        <title>Projetos | Leandro Felix</title>
        <meta name="description" content="Projetos em destaque e repositórios recentes no GitHub." />
      </Helmet>
      <PageThemeProvider colors={colors}>
        <Suspense fallback={<FeaturedProjectsSkeleton />}>
          <FeaturedProjectsSection />
        </Suspense>
        {error ? <p style={{ textAlign: 'center', padding: '2rem' }}>{error}</p> : null}
        {user && repos ? (
          <Suspense fallback={<RecentProjectsSkeleton />}>
            <RecentProjectsSection user={user} repos={repos} />
          </Suspense>
        ) : null}
        {loadingGitHub ? <RecentProjectsSkeleton /> : null}
      </PageThemeProvider>
    </>
  )
}
