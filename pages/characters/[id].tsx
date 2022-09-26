import React from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

import { fetcher } from '../../lib/fetcher'

import Layout from '../../components/Layout'
import Status from '../../components/Status'
import Heading from '../../components/Heading'

import toPascalCase from '../../lib/toPascalCase'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const characterID = params?.id
  const character = await fetcher(
    `https://rickandmortyapi.com/api/character/${characterID}`
  )

  return {
    props: { character }
  }
}

type DetailProps = {
  label: string
  data: any
}

function Detail({ label, data }: DetailProps) {
  return (
    <div className="mb-5">
      <span className="block text-gray-500 font-medium">{label}</span>
      <p className="text-xl font-semibold">{data}</p>
    </div>
  )
}

export type CharacterInfoProps = {
  character: any
}

export default function CharacterInfo({ character }: CharacterInfoProps) {
  const router = useRouter()

  return (
    <div className="w-full">
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
          <Status
            size="normal"
            status={character.status}
            species={character.species}
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-500">Biometric Data</h3>
      <div className="my-5 grid grid-col-3 gap-5">
        <Detail label="Gender" data={character.gender} />
        <Detail label="Current Status" data={toPascalCase(character.status)} />
      </div>
    </div>
  )
}

CharacterInfo.pageLayout = (page: React.ReactElement) => {
  const { name } = page.props.character

  return <Layout title={`${name}`}>{page}</Layout>
}
