import React from 'react'
import { useInfiniteQuery } from 'react-query'

import { getCharacters } from '@lib/query'
import { InfoSchema, CharacterSchema } from '@lib/schema'

import {
  Layout,
  Button,
  Heading,
  GridContainer,
  SubHeading,
  Character
} from '@components'

type Response = {
  info: InfoSchema
  results: CharacterSchema[]
}

export default function Characters() {
  const { data, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<Response>('characters', getCharacters, {
      getNextPageParam: lastPage => lastPage.info.next
    })

  return (
    <>
      <Heading>Characters</Heading>
      <SubHeading>
        All know characters through out the series. You can view full details by
        selecting character.
      </SubHeading>
      <GridContainer>
        {isSuccess &&
          data?.pages.map(({ results }) =>
            results.map(character => (
              <Character key={character.id} character={character} />
            ))
          )}
      </GridContainer>
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

Characters.pageLayout = (page: React.ReactElement) => {
  return <Layout title="All known characters">{page}</Layout>
}
