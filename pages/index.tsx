import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Rick and Morty Database</h1>
      <Link href={'/characters'} passHref>
        <a>Browse All Known Characters</a>
      </Link>
    </div>
  )
}
