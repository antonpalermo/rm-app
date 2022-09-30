import React from 'react'

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>

export function Heading({ className, ...props }: HeadingProps) {
  return (
    <h1
      className={`${className} text-4xl sm:text-6xl font-black mb-4`}
      {...props}
    />
  )
}
