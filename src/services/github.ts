import settings from '@/content/_settings.json'

export interface GitHubUser {
  login: string
  name: string
  avatar_url: string
  html_url: string
}

export interface GitHubRepo {
  name: string
  fork: boolean
  description: string | null
  forks_count: number
  html_url: string
  language: string | null
  watchers: number
  default_branch: string
  homepage: string | null
  timestamp: number
  topics: string[]
  pushed_at: string
}

export async function fetchGitHubPortfolio(): Promise<{
  user: GitHubUser[]
  repos: GitHubRepo[]
}> {
  const username = settings.username.github

  const [gitUserRes, gitReposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`),
    fetch(`https://api.github.com/users/${username}/repos`),
  ])

  const userJson = await gitUserRes.json()
  const reposJson = await gitReposRes.json()

  if (!userJson.login || !Array.isArray(reposJson)) {
    throw new Error('GitHub data unavailable')
  }

  const user: GitHubUser[] = [
    {
      login: userJson.login,
      name: userJson.name,
      avatar_url: userJson.avatar_url,
      html_url: userJson.html_url,
    },
  ]

  let repos: GitHubRepo[] = reposJson.map(
    (repo: {
      name: string
      fork: boolean
      description: string | null
      forks_count: number
      html_url: string
      language: string | null
      watchers: number
      default_branch: string
      homepage: string | null
      pushed_at: string
      topics: string[]
    }) => {
      const timestamp = Math.floor(new Date(repo.pushed_at).getTime() / 1000)
      return {
        name: repo.name,
        fork: repo.fork,
        description: repo.description,
        forks_count: repo.forks_count,
        html_url: repo.html_url,
        language: repo.language,
        watchers: repo.watchers,
        default_branch: repo.default_branch,
        homepage: repo.homepage,
        timestamp,
        topics: repo.topics,
        pushed_at: repo.pushed_at,
      }
    },
  )

  repos.sort((a, b) => b.timestamp - a.timestamp)
  repos = repos.filter(
    (repo, index) => index < 8 && !repo.topics.includes('github-config'),
  )

  return { user, repos }
}
