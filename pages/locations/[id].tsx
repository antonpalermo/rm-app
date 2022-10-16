import React, { useState } from 'react'

import { GetServerSideProps } from 'next'

import {
  Layout,
  Heading,
  Avatar,
  SubHeading,
  Detail,
  Button,
  Character,
  GridContainer
} from '@components'

import { fetcher, toPascalCase } from '@lib/helpers'
import { CharacterSchema, LocationSchema } from '@lib/schema'
import { useQuery } from 'react-query'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const locationId = params?.id
  const enpoint = `https://rickandmortyapi.com/api/location/${locationId}`

  const location = await fetcher(enpoint)

  return {
    props: { location }
  }
}

export type LocationDetailsProps = {
  location: LocationSchema
}

export default function LocationDetails({ location }: LocationDetailsProps) {
  const resolveResidents = location.residents
    .map(people => people.match(/[0-9]+$/)?.toString())
    .toString()

  const { data, isSuccess, isFetching } = useQuery<CharacterSchema[]>(
    `/character/${resolveResidents}`,
    { refetchOnWindowFocus: false }
  )
  const [listIndex, setListIndex] = useState<number>(4)
  const characterCount = data?.length
  const paginatedList = data?.slice(0, listIndex)

  const isComplete = paginatedList?.length === characterCount

  return (
    <div className="w-full">
      <div className="inline-flex items-end mb-10">
        <Avatar src={'/na_placeholder.webp'} alt={location.name} />
        <div className="ml-5 sm:ml-10">
          <Heading>{location.name}</Heading>
          <p className="font-semibold text-gray-400 text-sm sm:text-lg">
            See full location details below.
          </p>
        </div>
      </div>
      <SubHeading className="text-xl">General Information</SubHeading>
      <div className="my-5 grid grid-cols-3 gap-5 sm:gap-6">
        <Detail label="Location ID" data={location.id} />
        <Detail label="Type" data={location.type} />
        <Detail label="Dimension" data={toPascalCase(location.dimension)} />
      </div>
      <SubHeading className="text-xl">Known Residents</SubHeading>
      <GridContainer>
        {paginatedList?.map(character => (
          <Character key={character.id} character={character} />
        ))}
      </GridContainer>
      <Button
        className={`relative mt-10 inset-1/2 -translate-x-1/2 ${
          isComplete ? 'hover:bg-white' : 'bg-gray-100 '
        }`}
        onClick={() => setListIndex(prev => prev + 4)}
        disabled={isComplete}
      >
        {isComplete
          ? 'Hooray! we completely load all related episodes'
          : 'Load more'}
      </Button>
    </div>
  )
}

LocationDetails.pageLayout = (page: React.ReactElement) => {
  const { name } = page.props.location
  return <Layout title={name}>{page}</Layout>
}
