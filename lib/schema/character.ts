import { LocationSchema } from './location'

export type CharacterSchema = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Partial<LocationSchema>
  location: Partial<LocationSchema>
  image: string
  episodes: string[]
  url: string
  created: Date
}
