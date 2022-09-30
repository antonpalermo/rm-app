import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { LocationSchema } from '../lib/schema/location'

export type LocationProps = {
  location: LocationSchema
}

export default function Location({
  location: { id, name, dimension, type, residents }
}: LocationProps) {
  return (
    <div className="bg-gray-100 w-full rounded-md inline-flex overflow-hidden">
      <div className="relative w-[200px] h-[200px]">
        <Image
          src={'/na_placeholder.webp'}
          alt={`Known image of ${name}`}
          layout="fill"
        />
      </div>
      <div className="p-5">
        <Link href={`/locations/${id}`} passHref>
          <a className="block font-semibold">{name}</a>
        </Link>
      </div>
    </div>
  )
}
