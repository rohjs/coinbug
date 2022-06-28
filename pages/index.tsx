import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const List = dynamic(() => import('components/List'), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <div>
      <ErrorBoundary fallback={<div style={{ background: 'red' }}>Error</div>}>
        <Suspense fallback={<div style={{ background: 'blue' }}>LOADING</div>}>
          <List title={1} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default Home
