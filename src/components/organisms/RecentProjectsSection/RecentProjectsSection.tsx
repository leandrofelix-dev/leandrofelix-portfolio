import { FaCodeBranch, FaExternalLinkAlt, FaStar } from 'react-icons/fa'

import { Container } from '@/components/atoms/Container'
import { GitHubRepo, GitHubUser } from '@/services/github'

import {
  Homepage,
  Profile,
  ProjectArticle,
  ProjectDetails,
  ProjectHeader,
  ProjectsGrid,
  PushedAt,
  RecentContainer,
  RecentRoot,
  Topic,
  TopicsContainer,
} from './RecentProjectsSection.styles'

interface RecentProjectsSectionProps {
  repos: GitHubRepo[]
  user: GitHubUser[]
}

export function RecentProjectsSection({ repos, user }: RecentProjectsSectionProps) {
  return (
    <RecentRoot>
      <Container spacing={['verticalXXXLrg']}>
        <RecentContainer>
          <h3>Recent Projects</h3>
          <Profile>
            <img src={user[0]?.avatar_url} alt="Github Profile Photo" />
            <span>
              <p>{user[0]?.name}</p>
              <a href={user[0]?.html_url} rel="noreferrer" target="_blank">
                {user[0]?.html_url} <FaExternalLinkAlt />
              </a>
            </span>
          </Profile>
          <ProjectsGrid>
            {repos.map((repo) => (
              <ProjectArticle key={repo.name}>
                <ProjectHeader>
                  <a href={repo.html_url} rel="noreferrer" target="_blank">
                    {repo.name} <FaExternalLinkAlt />
                  </a>
                  {repo.homepage ? <Homepage>{repo.homepage}</Homepage> : null}
                </ProjectHeader>
                <p>{repo.description}</p>
                <ProjectDetails>
                  {repo.language ? (
                    <p>
                      <i className={`devicon-${repo.language.toLowerCase()}-plain colored`} />{' '}
                      {repo.language}
                    </p>
                  ) : null}
                  <p>
                    <FaStar /> {repo.watchers}
                  </p>
                  <p>
                    <FaCodeBranch /> {repo.forks_count}
                  </p>
                  <PushedAt>{new Date(repo.pushed_at).toDateString()}</PushedAt>
                </ProjectDetails>
                <TopicsContainer>
                  {repo.topics.map((topic) => (
                    <Topic key={topic}>
                      <i className="devicon-github-plain" /> {topic}
                    </Topic>
                  ))}
                </TopicsContainer>
              </ProjectArticle>
            ))}
          </ProjectsGrid>
        </RecentContainer>
      </Container>
    </RecentRoot>
  )
}
