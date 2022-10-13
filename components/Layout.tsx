import React from 'react'
import Head from 'next/head'

import Footer from './Footer'
import { Navbar } from '@components'
import Link from 'next/link'

export type LayoutProps = {
  title?: string
  children: React.ReactElement
}

export function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="container">
          <div className="relative w-full py-3 inline-flex justify-between items-center">
            <Link href={'/'} passHref>
              <a className="font-semibold text-gray-900 hover:text-blue-500">
                Rick and Morty
              </a>
            </Link>
            <Navbar />
          </div>
        </div>
      </header>
      <div className="container my-16">{children}</div>
      <Footer />
    </>
  )
}
