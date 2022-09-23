import Image from 'next/image'
import { CharacterSchema } from '../lib/schema/character'

export type CharacterProps = {
  info: CharacterSchema
}

export default function Character({ info }: CharacterProps) {
  return (
    <div className="p-5 bg-gray-50">
      <h1 className="font-medium">{info.name}</h1>
      <p>Current Status: {info.status}</p>
      <Image
        src={info.image}
        alt={`Photograph of ${info.name}`}
        width={100}
        height={100}
      />
    </div>
  )
}
