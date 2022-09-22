import { Location } from './location'

export type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Partial<Location>
  location: Partial<Location>
  image: string
  episodes: string[]
  url: string
  created: Date
}
