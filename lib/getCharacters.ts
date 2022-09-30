import fetcher from './fetcher'

const endpoint = 'https://rickandmortyapi.com/api/character'
const getCharacters = async ({ pageParam = endpoint }) =>
  await fetcher(pageParam)

export default getCharacters
