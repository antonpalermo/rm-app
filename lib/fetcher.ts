const fetcher = async (input: RequestInfo | URL, init?: RequestInit) =>
  await (await fetch(input, init)).json()

export default fetcher
