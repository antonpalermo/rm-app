import { LocationSchema } from './location'

export type CharacterSchema = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: LocationSchema
  location: LocationSchema
  image: string
  episode: string[]
  url: string
  created: Date
}
