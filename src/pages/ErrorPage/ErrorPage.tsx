import { Helmet } from 'react-helmet-async'

import { Error500 } from '@/components/organisms/Error500/Error500'

export function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>500 | Leandro Felix</title>
      </Helmet>
      <Error500 />
    </>
  )
}
