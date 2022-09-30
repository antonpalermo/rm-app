import React from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

export type LayoutProps = {
  title?: string
  children: React.ReactElement
}

export default function Layout({ title, children }: LayoutProps) {
  const navigations = [
    {
      label: 'Characters',
      path: '/characters'
    },
    {
      label: 'Locations',
      path: '/locations'
    }
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar routes={navigations} />
      <div className="sm:w-9/12 mx-auto my-16 px-5">{children}</div>
      <Footer />
    </>
  )
}
