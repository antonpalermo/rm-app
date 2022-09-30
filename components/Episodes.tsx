import React from 'react'
import { EpisodeSchema } from '../lib/schema/episode'

import Episode from './Episode'
import { Button, Label } from '@components'

export type EpisodesProps = {
  episodes: EpisodeSchema[]
}

export default function Episodes({ episodes }: EpisodesProps) {
  const [listIndex, setListIndex] = React.useState(5)
  const episodeCount = episodes.length
  const paginatedList = episodes.slice(0, listIndex)

  const isComplete = paginatedList.length === episodeCount

  return (
    <div className="space-y-3">
      <Label>Appearances</Label>
      {paginatedList.map(ep => (
        <Episode key={ep.id} episode={ep} />
      ))}
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
