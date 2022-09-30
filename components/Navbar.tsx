import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export type NavbarProps = {
  routes: { label: string; path: string }[]
}

export default function Navbar({ routes }: NavbarProps) {
  const router = useRouter()
  const resolveLinkBackground = (path: string) => {
    return router.pathname === path
  }

  return (
    <nav className="border-b border-gray-100 bg-gray-50 py-2 sticky top-0 z-50">
      <div className="w-full sm:w-9/12 mx-auto px-5">
        <div className="w-full inline-flex items-center justify-between">
          <Link href={'/'} passHref>
            <a className="block font-medium text-gray-900 hover:text-blue-500">
              Rick and Morty
            </a>
          </Link>
          <div className='inline-flex items-center space-x-2'>
            {routes.map((nav, index) => (
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
      </div>
    </nav>
  )
}
