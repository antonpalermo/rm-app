import React from 'react'
import Link from 'next/link'

export type FooterLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export default function FooterLinks({ href, ...props }: FooterLinkProps) {
  return (
    <Link href={href} passHref>
      <a
        className={`${props.className} block px-3 py-3 text-sm font-semibold hover:text-blue-500`}
        {...props}
      />
    </Link>
  )
}
