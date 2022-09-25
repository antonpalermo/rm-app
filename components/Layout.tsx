import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import { useRouter } from 'next/router'

type LayoutProps = {
  title?: string
  children: React.ReactElement
}

export default function Layout({ title, children }: LayoutProps) {
  const router = useRouter()
  const navigations = [
    {
      label: 'Characters',
      path: '/characters'
    }
  ]

  const resolveLinkBackground = (path: string) => {
    return router.pathname === path
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="bg-gray-50 mb-14 py-2 shadow">
        <div className="w-9/12 mx-auto px-5">
          <div className="w-full inline-flex justify-end">
            {navigations.map((nav, index) => (
              <Link key={nav.label + index} href={nav.path} passHref>
                <a
                  className={`${
                    resolveLinkBackground(nav.path) ? 'bg-gray-100' : ''
                  } block px-4 py-3 font-semibold tracking-wide text-sm text-gray-900 hover:bg-gray-100 rounded-md`}
                >
                  {nav.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="w-full sm:w-9/12 mx-auto px-5">{children}</div>
    </>
  )
}
