import React from 'react'
import { EpisodeSchema } from '../lib/schema/episode'
import seasonResolver from '../lib/seasonResolver'

export type EpisodeProps = {
  episode: EpisodeSchema
}

export default function Episode({ episode }: EpisodeProps) {
  return (
    <div className="w-full px-4 py-3 bg-gray-100 rounded-md text-sm font-semibold inline-flex justify-between">
      <div className="inline-flex">
        <span className="mr-5 text-gray-400">
          {seasonResolver(episode.episode)}
        </span>
        <h2>{episode.name}</h2>
      </div>
      <span className="text-gray-400 hidden sm:block">{episode.air_date}</span>
    </div>
  )
}
