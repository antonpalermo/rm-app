import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`${className} px-3 py-2 text-sm font-semibold rounded-md hover:bg-gray-100`}
      {...props}
    />
  )
}
