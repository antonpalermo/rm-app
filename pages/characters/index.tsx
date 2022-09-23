import Head from 'next/head'
import { useRef } from 'react'
import { useInfiniteQuery } from 'react-query'

import Character from '../../components/Character'
import useIntersectionObserver from '../../lib/useIntersectionObserver'

import { InfoSchema } from '../../lib/schema/info'
import { CharacterSchema } from '../../lib/schema/character'
import { fetchCharacters } from '../../lib/fetchCharacters'

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
    <>
      <Head>
        <title>All known characters</title>
      </Head>
      <div>
        <h1>Characters</h1>
        <div className="grid grid-cols-2 grid-flow-row gap-3">
          {isSuccess &&
            data?.pages.map(pages =>
              pages.results.map(characterInfo => (
                <Character key={characterInfo.id} info={characterInfo} />
              ))
            )}
        </div>
        <div ref={ref}>Div</div>
      </div>
    </>
  )
}
