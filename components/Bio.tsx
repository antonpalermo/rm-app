import Link from 'next/link'
import { CharacterSchema } from '../lib/schema/character'

type BioProps = {
  bio: Pick<CharacterSchema, 'name' | 'status' | 'species' | 'location'>
}

export default function Bio({
  bio: { name, species, status, location }
}: BioProps) {
  const toPascalCase = (value: string) => {
    return value[0].toUpperCase() + value.substring(1)
  }

  const currentStatus = (status: string) => {
    switch (status) {
      case 'Alive':
        return 'bg-green-500'
      case 'Dead':
        return 'bg-red-500'
      case 'unknown':
        return 'bg-gray-500'
    }
  }

  return (
    <div className="h-full p-5 flex flex-col justify-between">
      <div className='mb-3'>
        <Link href={''} passHref>
          <a className="block font-semibold">{name}</a>
        </Link>
        <span className="inline-flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${currentStatus(status)}`} />
          <p className="text-sm font-semibold text-gray-600">
            {toPascalCase(status)} - {toPascalCase(species)}
          </p>
        </span>
      </div>
      <div>
        <span className="text-sm font-semibold text-gray-500">
          Last known location
        </span>
        <p className='font-medium'>{location.name}</p>
      </div>
    </div>
  )
}
