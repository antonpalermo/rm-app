import Image from 'next/image'

import Bio from './Bio'
import { CharacterSchema } from '../lib/schema/character'
import { Card, CardContent } from '@components'

export type CharacterProps = {
  info: CharacterSchema
}

export default function Character({ info }: CharacterProps) {
  return (
    <Card>
      <CardContent>
        <Bio bio={info} />
      </CardContent>
    </Card>
  )
}
