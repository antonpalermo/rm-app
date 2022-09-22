import { CharacterSchema } from '../lib/schema/character'

export type CharacterProps = {
  character: CharacterSchema
}

export default function Character({ character }: CharacterProps) {
  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  )
}
