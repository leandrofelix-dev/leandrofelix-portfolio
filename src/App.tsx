import { useCallback, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
  markTerminalBootSeen,
  shouldShowTerminalBoot,
  TerminalBoot,
} from '@/components/organisms/TerminalBoot'
import { MainTemplate } from '@/components/templates/MainTemplate/MainTemplate'
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage'
import { HomePage } from '@/pages/HomePage/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage'
import { ProjectsPage } from '@/pages/ProjectsPage/ProjectsPage'

export function App() {
  const [bootDone, setBootDone] = useState(() => !shouldShowTerminalBoot())

  const handleBootComplete = useCallback(() => {
    markTerminalBootSeen()
    setBootDone(true)
  }, [])

  return (
    <>
      {!bootDone && <TerminalBoot onComplete={handleBootComplete} />}
      {bootDone && (
        <BrowserRouter>
          <MainTemplate>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/500" element={<ErrorPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </MainTemplate>
        </BrowserRouter>
      )}
    </>
  )
}
