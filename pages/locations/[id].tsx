import React, { useEffect, useState } from 'react'

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
  const [sIndex, setSIndex] = useState<number>(0)
  const [eIndex, setEIndex] = useState<number>(4)
  const [complete, setComplete] = useState<boolean>(false)
  const [residents, setResidents] = useState<CharacterSchema[]>([])

  const noKnownResidents = residents.length === 0
  const knownResidents = location.residents.map(people =>
    people.match(/[0-9]+$/)?.toString()
  )

  const { data } = useQuery<CharacterSchema[] | CharacterSchema>(
    `/character/${knownResidents.toString()}`,
    { enabled: knownResidents.length !== 0, refetchOnWindowFocus: false }
  )

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        const slicedResidents = data.slice(sIndex, eIndex)
        return setResidents(prev => [...prev, ...slicedResidents])
      }
      return setResidents(prev => [...prev, data as CharacterSchema])
    }
  }, [data, sIndex, eIndex])

  const paginate = () => {
    const increment = 4
    if (residents.length === knownResidents.length) {
      setComplete(true)
      return
    }
    setSIndex(prev => prev + increment)
    setEIndex(prev => prev + increment)
  }

  return (
    <div className="w-full">
      <div className="inline-flex items-end mb-10">
        <Avatar
          src={'/na_placeholder.webp'}
          alt={location.name}
          priority={true}
        />
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
      {noKnownResidents ? (
        <p className="relative mt-10 w-full text-center font-medium text-gray-400">
          No known residents
        </p>
      ) : (
        <GridContainer>
          {residents &&
            residents.map(r => <Character key={r.id} character={r} />)}
        </GridContainer>
      )}
      <Button
        className={`${
          noKnownResidents ? 'hidden' : ''
        } relative mt-10 inset-1/2 -translate-x-1/2 ${
          complete ? 'hover:bg-white' : 'bg-gray-100 '
        }`}
        onClick={paginate}
        disabled={complete}
      >
        {complete
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
