import React from 'react'

export type GridContainerProps = React.HTMLAttributes<HTMLDivElement> & {}

export function GridContainer({ className, ...props }: GridContainerProps) {
  return (
    <div
      className={`${className} grid my-5 sm:my-10 grid-cols-1 sm:grid-cols-2 grid-flow-row gap-5`}
      {...props}
    />
  )
}
