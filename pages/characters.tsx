import { useQuery } from 'react-query'
import { Character } from '../lib/character'
import { fetchCharacters } from '../lib/fetchCharacters'
import { Info } from '../lib/info'

type Response = {
  info: Info
  results: Character[]
}

export default function Characters() {
  const { data } = useQuery<Response>(['characters'], fetchCharacters)

  return (
    <div>
      <h1>Characters</h1>
      {data?.results.map(character => JSON.stringify(character))}
    </div>
  )
}
