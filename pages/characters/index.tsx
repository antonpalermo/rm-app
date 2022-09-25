import Head from 'next/head'
import { ReactElement, useRef } from 'react'
import { useInfiniteQuery } from 'react-query'

import Character from '../../components/Character'
import useIntersectionObserver from '../../lib/useIntersectionObserver'

import { InfoSchema } from '../../lib/schema/info'
import { CharacterSchema } from '../../lib/schema/character'
import { fetchCharacters } from '../../lib/fetchCharacters'
import Layout from '../../components/Layout'

type Response = {
  info: InfoSchema
  results: CharacterSchema[]
}

export default function Characters() {
  const ref = useRef<HTMLDivElement>(null)
  const { data, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<Response>('characters', fetchCharacters, {
      getNextPageParam: lastPage => lastPage.info.next
    })

  const observerCallback = (
    entries: IntersectionObserverEntry[],
    _observer: IntersectionObserver
  ) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      fetchNextPage()
    }
  }

  useIntersectionObserver<HTMLDivElement>(ref, observerCallback)

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800">Characters</h1>
      <p className="font-medium text-gray-500">
        All know characters through out the series
      </p>
      <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 grid-flow-row gap-5">
        {isSuccess &&
          data?.pages.map(pages =>
            pages.results.map(characterInfo => (
              <Character key={characterInfo.id} info={characterInfo} />
            ))
          )}
      </div>
      {isSuccess && (
        <div
          ref={ref}
          className={`my-10 w-full text-center font-semibold py-3`}
        >
          {/* TODO: find a better way to render things! */}
          {isFetchingNextPage ? 'Loading...' : ''}
          {!hasNextPage && 'Hooray! We successfully get all characters.'}
        </div>
      )}
    </div>
  )
}

Characters.pageLayout = (page: ReactElement) => {
  return <Layout title="All known characters">{page}</Layout>
}
