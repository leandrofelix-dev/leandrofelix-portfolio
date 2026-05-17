import { Helmet } from 'react-helmet-async'

import { Error404 } from '@/components/organisms/Error404/Error404'

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 | Leandro Felix</title>
      </Helmet>
      <Error404 />
    </>
  )
}
