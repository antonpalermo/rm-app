import React, { useEffect, useState } from 'react'

import { useQuery } from 'react-query'
import { GetServerSideProps } from 'next'

import {
  Layout,
  Heading,
  SubHeading,
  ShortDetail,
  Episode,
  Avatar,
  Detail,
  GridContainer,
  Button
} from '@components'

import { fetcher, toPascalCase } from '@lib/helpers'
import { CharacterSchema, EpisodeSchema } from '@lib/schema'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const characterID = params?.id
  const endpoint = `https://rickandmortyapi.com/api/character/${characterID}`

  const character = await fetcher(endpoint)

  return {
    props: { character }
  }
}

export type CharacterInfoProps = {
  character: CharacterSchema
}

export default function CharacterInfo({ character }: CharacterInfoProps) {
  const [sIndex, setSIndex] = useState<number>(0)
  const [eIndex, setEIndex] = useState<number>(4)
  const [complete, setComplete] = useState<boolean>(false)
  const [episodes, setEpisodes] = useState<EpisodeSchema[]>([])

  const noAppearances = episodes.length === 0
  const appearances = character.episode.map(ep =>
    ep.match(/[0-9]+$/)?.toString()
  )

  const { data } = useQuery<EpisodeSchema[]>(
    `/episode/${appearances.toString()}`,
    { refetchOnWindowFocus: false }
  )

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        const slicedEpisodes = data.slice(sIndex, eIndex)
        return setEpisodes(prev => [...prev, ...slicedEpisodes])
      }
      return setEpisodes(prev => [...prev, data as EpisodeSchema])
    }
  }, [data, sIndex, eIndex])

  const paginate = () => {
    const increment = 4
    if (episodes.length === appearances.length) {
      setComplete(true)
      return
    }
    setSIndex(prev => prev + increment)
    setEIndex(prev => prev + increment)
  }

  return (
    <div className="w-full">
      <div className="inline-flex items-end mb-10">
        <Avatar src={character.image} alt={character.name} />
        <div className="ml-5 sm:ml-10">
          <Heading>{character.name}</Heading>
          <ShortDetail
            size="normal"
            status={character.status}
            type={character.status}
            info={character.species}
          />
        </div>
      </div>
      <SubHeading className="text-xl">General Information</SubHeading>
      <div className="my-5 grid grid-cols-3 gap-5 sm:gap-6">
        <Detail label="Gender" data={character.gender} />
        <Detail label="Species" data={toPascalCase(character.species)} />
        <Detail label="Current Status" data={toPascalCase(character.status)} />
        <Detail
          className={'col-span-3 sm:col-span-1'}
          label="Origin"
          data={toPascalCase(character.origin.name)}
        />
        <Detail
          className={'col-span-3 sm:col-span-1'}
          label="Current Location"
          data={toPascalCase(character.location.name)}
        />
      </div>
      <SubHeading className="text-xl">Episode Appearances</SubHeading>
      {noAppearances ? (
        <p className="relative mt-10 w-full text-center font-medium text-gray-400">
          No appearances recorded
        </p>
      ) : (
        <GridContainer>
          {episodes && episodes.map(e => <Episode key={e.id} episode={e} />)}
        </GridContainer>
      )}
      <Button
        className={`${
          noAppearances ? 'hidden' : ''
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

CharacterInfo.pageLayout = (page: React.ReactElement) => {
  const { name } = page.props.character
  return <Layout title={`${name}`}>{page}</Layout>
}
