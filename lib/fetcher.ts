export async function fetcher(input: RequestInfo | URL, init?: RequestInit) {
  return await (await fetch(input, init)).json()
}
