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

type DetailProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string
  data: any
}

function Detail({ label, data, className, ...props }: DetailProps) {
  return (
    <div className={`${className} mb-5 inline-block`} {...props}>
      <h4 className="text-gray-500 font-medium">{label}</h4>
      <p className="text-xl font-semibold">{data}</p>
    </div>
  )
}

export type CharacterInfoProps = {
  character: any
}

export default function CharacterInfo({ character }: CharacterInfoProps) {
  const router = useRouter()

  console.log(character)

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
          <Status
            size="normal"
            status={character.status}
            species={character.species}
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-500">Biometric Data</h3>
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
      <h3 className="text-xl font-semibold text-gray-500">
        Other Related Information
      </h3>
    </div>
  )
}

CharacterInfo.pageLayout = (page: React.ReactElement) => {
  const { name } = page.props.character
  return <Layout title={`${name}`}>{page}</Layout>
}
