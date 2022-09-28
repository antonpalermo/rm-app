import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fetcher } from '../lib/fetcher'

import '../styles/globals.css'

type PageLayout<P = {}, IP = P> = NextPage<P, IP> & {
  pageLayout?: (page: ReactElement) => ReactNode
}

type AppPropsPageLayout = AppProps & {
  Component: PageLayout
}

export default function App({ Component, pageProps }: AppPropsPageLayout) {
  const getPageLayout = Component.pageLayout ?? ((page: ReactElement) => page)

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: async ({ queryKey }) =>
          await fetcher(`https://rickandmortyapi.com/api${queryKey}`)
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      {getPageLayout(<Component {...pageProps} />)}
    </QueryClientProvider>
  )
}
