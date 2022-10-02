import { getCharacters, getLocations } from '@lib/query'
import { CharacterSchema, InfoSchema, LocationSchema } from '@lib/schema'

type Result = {
  info: InfoSchema
  result: CharacterSchema | LocationSchema
}

describe('fetch charters', () => {
  let characters: Result
  const endpoint = 'https://rickandmortyapi.com/api/character'

  beforeEach(async () => {
    characters = await (await fetch(endpoint)).json()
  })

  it('should return list of characters', async () => {
    const returnCharacters = await getCharacters({ pageParam: endpoint })
    expect(returnCharacters).toEqual(characters)
  })
})

describe('fetch locations', () => {
  let locations: Result
  const endpoint = 'https://rickandmortyapi.com/api/location'

  beforeEach(async () => {
    locations = await (await fetch(endpoint)).json()
  })

  it('should return list of locations', async () => {
    const returnedLocations = await getLocations({ pageParam: endpoint })
    expect(returnedLocations).toEqual(locations)
  })
})
