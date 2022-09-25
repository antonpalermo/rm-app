import Image from 'next/image'

import Bio from './Bio'
import { CharacterSchema } from '../lib/schema/character'

export type CharacterProps = {
  info: CharacterSchema
}

export default function Character({ info }: CharacterProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-md overflow-hidden">
      <div className="h-full inline-flex">
        <Image
          src={info.image}
          alt={`Known photograph of ${info.name}`}
          width={190}
          height={200}
          priority={true}
        />
        <Bio bio={info} />
      </div>
    </div>
  )
}

// <div className="bg-gray-50 border-gray-200 rounded-md border overflow-hidden">
//   <div className="h-full w-full inline-flex">
//     <div style={{ position: 'relative', width: '300px', height: '200px' }}>
//       <Image
//         src={info.image}
//         alt={`Known photograph of ${info.name}`}
//         layout="fill"
//       />
//     </div>
//     <Bio bio={info} />
//   </div>
// </div>
