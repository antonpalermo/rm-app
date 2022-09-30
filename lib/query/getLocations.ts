import { fetcher } from '@lib/helpers'

const endpont = 'https://rickandmortyapi.com/api/location'
export const getLocations = async ({ pageParam = endpont }) =>
  await fetcher(pageParam)
