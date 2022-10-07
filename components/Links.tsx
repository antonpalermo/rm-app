import React from 'react'
import NextLink from 'next/link'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const Base = ({ href, className, ...props }: LinkProps) => (
  <NextLink href={`${href}`} passHref>
    <a
      className={`${className} hover:text-blue-500 hover:bg-blue-50 rounded-md text-sm font-semibold`}
      {...props}
    />
  </NextLink>
)

export function Link({ href, className, ...props }: LinkProps) {
  return (
    <Base href={href} className={`${className} block px-4 py-3`} {...props} />
  )
}

export function InlineLink({ href, className, ...props }: LinkProps) {
  return (
    <NextLink href={`${href}`} passHref>
      <a
        className={`${className} border-b py-1 hover:text-blue-500 hover:border-blue-500`}
        {...props}
      />
    </NextLink>
  )
}
