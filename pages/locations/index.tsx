import React, { ReactElement } from 'react'
import { useInfiniteQuery } from 'react-query'

import Button from '../../components/Button'
import Heading from '../../components/Heading'
import Layout from '../../components/Layout'
import Location from '../../components/Location'
import SubHeading from '../../components/SubHeading'

import getLocations from '../../lib/getLocations'
import { InfoSchema } from '../../lib/schema/info'
import { LocationSchema } from '../../lib/schema/location'

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
            results.map((location, index) => (
              <Location key={location.id + index} location={location} />
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

Locations.pageLayout = (page: ReactElement) => {
  return <Layout title="All known locations">{page}</Layout>
}
