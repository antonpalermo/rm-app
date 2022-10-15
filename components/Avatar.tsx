import React from 'react'
import Image from 'next/image'

export type AvatarProps = {
  src: string
  alt: string
}

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className='p-1 bg-white rounded-md shadow'>
      <div className="relative min-w-[175px] sm:min-w-[200px] min-h-[175px] sm:min-h-[200px] rounded-md overflow-hidden">
        <Image
          className="p-2 bg-white"
          src={src}
          alt={`Known photograph of ${alt}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}
