import React from 'react'
import Link from 'next/link'

import {
  Button,
  Card,
  CardContent,
  CardCover,
  GridContainer,
  Label
} from '@components'
import { EpisodeSchema } from '@lib/schema'
import { seasonResolver } from 'lib/seasonResolver'

export type EpisodesProps = {
  episodes: EpisodeSchema[]
}

export function Episodes({ episodes }: EpisodesProps) {
  const [listIndex, setListIndex] = React.useState(5)
  const episodeCount = episodes.length
  const paginatedList = episodes.slice(0, listIndex)

  const isComplete = paginatedList.length === episodeCount

  return (
    <div className="space-y-3">
      <Label>Appearances</Label>
      <GridContainer>
        {paginatedList.map(ep => (
          <Card key={ep.id}>
            <CardCover image="/na_placeholder.webp" />
            <CardContent className="flex flex-col justify-between">
              <div>
                <Link href={''} passHref>
                  <a className="block font-semibold">{ep.name}</a>
                </Link>
                <span className="text-gray-500 text-sm font-semibold">
                  {seasonResolver(ep.episode)}
                </span>
              </div>
              <span className="text-gray-500 text-sm font-semibold">
                {ep.air_date}
              </span>
            </CardContent>
          </Card>
        ))}
      </GridContainer>
      <Button
        className={`relative mt-10 inset-1/2 -translate-x-1/2 ${
          isComplete ? 'hover:bg-white' : 'bg-gray-100 '
        }`}
        onClick={() => setListIndex(prev => prev + 5)}
        disabled={isComplete}
      >
        {isComplete
          ? 'Hooray! we completely load all related episodes'
          : 'Load more'}
      </Button>
    </div>
  )
}
