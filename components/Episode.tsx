import React from 'react'
import Link from 'next/link'

import { EpisodeSchema } from '@lib/schema'
import { seasonResolver } from '@lib/helpers'
import { Card, CardCover, CardContent } from './Card'

export type EpisodeProps = {
  episode: EpisodeSchema
}

export function Episode({ episode }: EpisodeProps) {
  return (
    <Card key={episode.id}>
      <CardCover image="/na_placeholder.webp" />
      <CardContent className="flex flex-col justify-between">
        <div>
          <Link href={''} passHref>
            <a className="block font-semibold">{episode.name}</a>
          </Link>
          <span className="text-gray-500 text-sm font-semibold">
            {seasonResolver(episode.episode)}
          </span>
        </div>
        <span className="text-gray-500 text-sm font-semibold">
          {episode.air_date}
        </span>
      </CardContent>
    </Card>
  )
}
