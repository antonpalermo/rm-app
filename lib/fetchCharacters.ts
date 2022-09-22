export async function fetchCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character')

  if (!response.ok) {
    throw new Error("Oh no! we're failed to fetch all characters!")
  }

  return await response.json()
}
