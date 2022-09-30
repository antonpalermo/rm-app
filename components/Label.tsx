import React from 'react'

export type LabelProps = React.HTMLAttributes<HTMLLabelElement>

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={`${className} block text-gray-400 font-medium mb-3`}
      {...props}
    />
  )
}
