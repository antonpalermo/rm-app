import React from 'react'
import Image from 'next/image'

import { useQuery } from 'react-query'
import { GetServerSideProps } from 'next'

import {
  Label,
  Layout,
  Heading,
  SubHeading,
  ShortDetail,
  Episodes
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

type DetailProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string
  data: any
}

function Detail({ label, data, className, ...props }: DetailProps) {
  return (
    <div className={`${className} mb-5 inline-block`} {...props}>
      <Label>{label}</Label>
      <p className="text-xl font-semibold">{data}</p>
    </div>
  )
}

export type CharacterInfoProps = {
  character: CharacterSchema
}

export default function CharacterInfo({ character }: CharacterInfoProps) {
  const resolveEpisode = character.episode
    .map(ep => ep.match(/[0-9]+$/)?.toString())
    .toString()

  const { data, isSuccess, isFetching } = useQuery<EpisodeSchema[]>(
    `/episode/${resolveEpisode}`,
    { refetchOnWindowFocus: false }
  )

  if (isFetching) {
    return <h1>loading...</h1>
  }

  return (
    <div className="w-full">
      <div className="inline-flex items-end mb-10">
        <div className="relative w-40 h-40 border rounded-md overflow-hidden">
          <Image
            src={character.image}
            alt={`Known photograph of ${character.name}`}
            layout="fill"
          />
        </div>
        <div className="ml-10">
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
      <SubHeading className="text-xl">Other Detials</SubHeading>
      {isSuccess && <Episodes episodes={data} />}
    </div>
  )
}

CharacterInfo.pageLayout = (page: React.ReactElement) => {
  const { name } = page.props.character
  return <Layout title={`${name}`}>{page}</Layout>
}
