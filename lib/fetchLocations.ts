import { fetcher } from './fetcher'

const endpont = 'https://rickandmortyapi.com/api/location'
const getLocations = async ({ pageParam = endpont }) => await fetcher(pageParam)

export default getLocations
