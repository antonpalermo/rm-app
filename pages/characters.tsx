import { useQuery } from 'react-query'

import { InfoSchema } from '../lib/schema/info'
import { CharacterSchema } from '../lib/schema/character'
import { fetchCharacters } from '../lib/fetchCharacters'

import Character from '../components/Character'
import Head from 'next/head'

type Response = {
  info: InfoSchema
  results: CharacterSchema[]
}

export default function Characters() {
  const { data } = useQuery<Response>(['characters'], fetchCharacters)

  return (
    <>
      <Head>
        <title>All known characters</title>
      </Head>
      <div>
        <h1>Characters</h1>
        {data?.results.map(character => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </>
  )
}
