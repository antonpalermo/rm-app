import React from 'react'
import { useInfiniteQuery } from 'react-query'

import { getCharacters } from '@lib/query'
import { InfoSchema, CharacterSchema } from '@lib/schema'

import {
  Layout,
  Button,
  Heading,
  Status,
  Card,
  CardCover,
  CardContent
} from '@components'
import Link from 'next/link'

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
      <p className="font-medium text-gray-500">
        All know characters through out the series. You can view full details by
        selecting character.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 grid-flow-row gap-5">
        {isSuccess &&
          data?.pages.map(pages =>
            pages.results.map(character => (
              <Card key={character.id}>
                <CardCover image={character.image} />
                <CardContent className="flex flex-col justify-between">
                  <div>
                    <Link href={`/characters/${character.id}`}>
                      <a className="block font-semibold">{character.name}</a>
                    </Link>
                    <Status
                      size="sm"
                      status={character.status}
                      species={character.species}
                    />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-600">
                      Current Location
                    </span>
                    <Link href={`/locations/${character.location.id}`}>
                      <a className="block font-semibold line-clamp-1">
                        {character.location.name}
                      </a>
                    </Link>
                  </div>
                </CardContent>
              </Card>
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

Characters.pageLayout = (page: React.ReactElement) => {
  return <Layout title="All known characters">{page}</Layout>
}
