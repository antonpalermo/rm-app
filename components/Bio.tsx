import Link from 'next/link'
import { CharacterSchema } from '../lib/schema/character'

import Status from './Status'

type BioProps = {
  bio: Pick<CharacterSchema, 'id' | 'name' | 'status' | 'species' | 'location'>
}

export default function Bio({
  bio: { id, name, species, status, location }
}: BioProps) {
  return (
    <div className="h-full p-5 flex flex-col justify-between">
      <div className="mb-3">
        <Link href={`/characters/${id}`} passHref>
          <a className="block font-semibold">{name}</a>
        </Link>
        <Status size="sm" status={status} species={species} />
      </div>
      <div>
        <span className="text-sm font-semibold text-gray-500">
          Last known location
        </span>
        <p className="font-medium">{location.name}</p>
      </div>
    </div>
  )
}
