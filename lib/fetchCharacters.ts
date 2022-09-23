export async function fetchCharacters({
  pageParam = 'https://rickandmortyapi.com/api/character'
}: any) {
  const response = await fetch(`${pageParam}`)

  if (!response.ok) {
    throw new Error("Oh no! there's a problem fetching all characters!")
  }

  return await response.json()
}
