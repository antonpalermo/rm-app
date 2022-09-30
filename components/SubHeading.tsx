import React from 'react'

export type SubHeadingProps = React.HTMLAttributes<HTMLHeadingElement>

export function SubHeading({ className, ...props }: SubHeadingProps) {
  return (
    <h2
      className={`${className} text-gray-400 font-semibold mb-4`}
      {...props}
    />
  )
}
