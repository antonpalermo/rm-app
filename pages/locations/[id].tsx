import React, { ReactElement } from 'react'
import Image from 'next/image'

import { GetServerSideProps } from 'next'

import Layout from '../../components/Layout'

import { fetcher } from '../../lib/fetcher'
import { LocationSchema } from '../../lib/schema/location'
import Heading from '../../components/Heading'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const locationId = params?.id
  const enpoint = `https://rickandmortyapi.com/api/location/${locationId}`

  const locations = await fetcher(enpoint)

  return {
    props: { locations }
  }
}

export type LocationDetailsProps = {
  locations: LocationSchema
}

export default function LocationDetails({ locations }: LocationDetailsProps) {
  return (
    <div className="inline-flex items-end mb-10">
      <div className="relative w-40 h-40 border rounded-md overflow-hidden">
        <Image
          src={'/na_placeholder.webp'}
          alt={`Known photograph of ${locations.name}`}
          layout="fill"
        />
      </div>
      <div className="ml-10">
        <Heading>{locations.name}</Heading>
      </div>
    </div>
  )
}

LocationDetails.pageLayout = (page: ReactElement) => {
  const { name } = page.props.locations
  return <Layout title={name}>{page}</Layout>
}
