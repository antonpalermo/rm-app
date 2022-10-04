import React from 'react'
import Link from 'next/link'

import {
  Button,
  Heading,
  SubHeading,
  Layout,
  Card,
  CardCover,
  CardContent,
  ShortDetail
} from '@components'

import { getLocations } from '@lib/query'
import { HiArrowRight } from 'react-icons/hi'
import { useInfiniteQuery } from 'react-query'
import { InfoSchema, LocationSchema } from '@lib/schema'

type Response = {
  info: InfoSchema
  results: LocationSchema[]
}

export type LocationProps = {
  locations: Response
}

export default function Locations() {
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<Response>('locations', getLocations, {
      getNextPageParam: ({ info }) => info.next
    })

  return (
    <>
      <Heading>Locations</Heading>
      <SubHeading>
        All know locations through out the series. You can view full details by
        selecting location.
      </SubHeading>
      <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 grid-flow-row gap-5">
        {isSuccess &&
          data.pages.map(({ results }) =>
            results.map(location => (
              <Card key={location.id}>
                <CardCover image="/na_placeholder.webp" />
                <CardContent className="flex flex-col justify-between">
                  <div>
                    <Link href={`/characters/${location.id}`}>
                      <a className="block font-semibold line-clamp-1">
                        {location.name}
                      </a>
                    </Link>
                    <ShortDetail
                      size="sm"
                      status="Alive"
                      type={location.type}
                      info={location.dimension}
                    />
                  </div>
                  <Link href={`/locations/${location.id}`}>
                    <a className="inline-flex items-center text-sm text-blue-500 font-semibold float-right">
                      View location info <HiArrowRight className="ml-2" />
                    </a>
                  </Link>
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
            : 'Hooray! we completely get all available locations.'}
        </Button>
      )}
    </>
  )
}

Locations.pageLayout = (page: React.ReactElement) => {
  return <Layout title="All known locations">{page}</Layout>
}
