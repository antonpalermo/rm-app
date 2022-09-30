import { fetcher } from '@lib/helpers'

const endpoint = 'https://rickandmortyapi.com/api/character'
export const getCharacters = async ({ pageParam = endpoint }) =>
  await fetcher(pageParam)
