import React from 'react'
import { Label } from '@components'

export type DetailProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string
  data: any
}

export function Detail({ label, data, className, ...props }: DetailProps) {
  return (
    <div className={`${className} mb-5 inline-block`} {...props}>
      <Label>{label}</Label>
      <p className="text-xl font-semibold">{data}</p>
    </div>
  )
}
