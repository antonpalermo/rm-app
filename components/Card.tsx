import React from 'react'
import Image from 'next/image'

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {}

export type CardCoverProps = CardProps & {
  image?: string
}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`${className} bg-white rounded-md shadow-sm border p-1 inline-flex`}
      {...props}
    />
  )
}

export function CardCover({ image }: CardCoverProps) {
  return (
    <div className="relative min-w-[175px] sm:min-w-[200px] min-h-[175px] sm:min-h-[200px] rounded-md overflow-hidden">
      <Image
        src={!image ? '/na_placeholder.webp' : image}
        alt={`card cover`}
        layout="fill"
      />
    </div>
  )
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={`${className} px-4 py-5`}>{props.children}</div>
}
