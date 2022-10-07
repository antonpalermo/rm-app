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
      <header className="bg-white shadow">
        <div className="container mx-auto px-5">
          <div className="relative w-full py-3 inline-flex justify-end sm:justify-between items-center">
            <Link href={'/'} passHref>
              <a className="sm:text-center sm:absolute sm:left-[50%] sm:-translate-x-1/2 font-semibold text-gray-900 hover:text-blue-500">
                Rick and Morty
              </a>
            </Link>
            <Navbar />
          </div>
        </div>
      </header>
      <div className="sm:w-9/12 mx-auto my-16 px-5">{children}</div>
      <Footer />
    </>
  )
}
