import Image from 'next/image'
import { CharacterSchema } from '../lib/schema/character'

export type CharacterProps = {
  character: CharacterSchema
}

export default function Character({ character }: CharacterProps) {
  return (
    <div>
      <h1 className="font-medium">{character.name}</h1>
      <Image
        src={character.image}
        alt={`Photograph of ${character.name}`}
        width={100}
        height={100}
      />
    </div>
  )
}
