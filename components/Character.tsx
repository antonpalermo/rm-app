import React from 'react'
import Link from 'next/link'

import { Card, CardCover, CardContent, ShortDetail } from '@components'
import { CharacterSchema } from '@lib/schema'

export type CharacterProps = {
  character: CharacterSchema
}

export function Character({ character }: CharacterProps) {

  const locationId = character.location.url.match(/[0-9]+$/)?.toString()

  return (
    <Card>
      <CardCover image={character.image} />
      <CardContent className="flex flex-col justify-between">
        <div>
          <Link href={`/characters/${character.id}`}>
            <a className="block font-semibold">{character.name}</a>
          </Link>
          <ShortDetail
            size="sm"
            status={character.status}
            type={character.status}
            info={character.species}
          />
        </div>
        <div>
          <span className="text-sm font-semibold text-gray-600">
            Current Location
          </span>
          <Link href={`/locations/${locationId}`}>
            <a className="block font-semibold line-clamp-1">
              {character.location.name}
            </a>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
