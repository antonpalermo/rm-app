import React, { ReactElement } from 'react'
import { useInfiniteQuery } from 'react-query'

import { InfoSchema } from '../../lib/schema/info'
import { CharacterSchema } from '../../lib/schema/character'
import { fetchCharacters } from '../../lib/fetchCharacters'

import Layout from '../../components/Layout'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import Character from '../../components/Character'

type Response = {
  info: InfoSchema
  results: CharacterSchema[]
}

export default function Characters() {
  const { data, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<Response>('characters', fetchCharacters, {
      getNextPageParam: lastPage => lastPage.info.next
    })

  return (
    <>
      <Heading>Characters</Heading>
      <p className="font-medium text-gray-500">
        All know characters through out the series. You can view full details by
        selecting character.
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
        <Button
          className="relative mt-10 inset-1/2 -translate-x-1/2 bg-gray-100"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading...'
            : hasNextPage
            ? 'Load more characters'
            : 'Hooray! we completely get all available characters.'}
        </Button>
      )}
    </>
  )
}

Characters.pageLayout = (page: ReactElement) => {
  return <Layout title="All known characters">{page}</Layout>
}
