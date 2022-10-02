import React from 'react'
import Link from 'next/link'

export type InlineLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export function InlineLink({ href, className, ...props }: InlineLinkProps) {
  return (
    <Link href={`${href}`} passHref>
      <a
        className={`${className} border-b py-1 hover:text-blue-500 hover:border-blue-500`}
        {...props}
      />
    </Link>
  )
}
