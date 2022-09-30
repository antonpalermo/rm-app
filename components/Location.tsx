import React from 'react'
import Image from 'next/image'

import { LocationSchema } from '../lib/schema/location'

export type LocationProps = {
  location: LocationSchema
}

export default function Location({
  location: { name, dimension, type, residents }
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
        <h2 className='font-semibold'>{name}</h2>
      </div>
    </div>
  )
}
