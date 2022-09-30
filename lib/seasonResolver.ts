export default function seasonResolver(info: string): string {
  const split = (start: number, end: number) =>
    info.split('').slice(start, end).join('')

  const season = split(1, 3)
  const ep = split(4, 6)

  return `Season ${season} - Episode ${ep}`
}
