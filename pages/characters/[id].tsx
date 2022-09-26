import React from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

import { fetcher } from '../../lib/fetcher'

import Layout from '../../components/Layout'
import Status from '../../components/Status'
import Heading from '../../components/Heading'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const characterID = params?.id
  const character = await fetcher(
    `https://rickandmortyapi.com/api/character/${characterID}`
  )

  return {
    props: { character }
  }
}

export type CharacterInfoProps = {
  character: any
}

export default function CharacterInfo({ character }: CharacterInfoProps) {
  const router = useRouter()

  return (
    <div className="">
      <div className="inline-flex items-end mb-5">
        <div className="relative w-40 h-40 border rounded-md overflow-hidden">
          <Image
            src={character.image}
            alt={`Known photograph of ${character.name}`}
            layout="fill"
          />
        </div>
        <div className="ml-10">
          <Heading>{character.name}</Heading>
          <Status status={character.status} species={character.species} />
        </div>
      </div>
      <p>Bio</p>
    </div>
  )
}

CharacterInfo.pageLayout = (page: React.ReactElement) => {
  const { name } = page.props.character

  return <Layout title={`${name}`}>{page}</Layout>
}
