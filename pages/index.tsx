import React from 'react'
import Link from 'next/link'

import { Heading, Layout } from '@components'

export default function Home() {
  const paths = [
    {
      label: 'All known characters',
      path: '/characters'
    },
    { label: 'All known locations', path: '/locations' },
    { label: 'Episodes', path: '/episodes' }
  ]

  return (
    <div className="text-center">
      <div className="my-5">
        <Heading data-testid="home-title">Rick and Morty</Heading>
        <p className="w-full sm:w-8/12 my-16 mx-auto text-lg font-medium text-gray-500 leading-loose">
          Rick and Morty is an American adult animated science-fiction sitcom
          created by Justin Roiland and Dan Harmon for Cartoon Network&apos;s
          nighttime programming block Adult Swim. It is distributed
          internationally by Warner Bros. Domestic Television.
        </p>
      </div>
      <p className="font-medium text-gray-500 mb-5">
        You can start by browsing one of the following
      </p>
      <div className="my-10">
        {paths.map((path, index) => (
          <Link key={path.label + index} href={path.path} passHref>
            <a className="block sm:inline-block px-4 py-3 font-semibold tracking-wide text-sm text-gray-900 hover:bg-gray-100 rounded-md">
              {path.label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

Home.pageLayout = (page: React.ReactElement) => {
  return <Layout title="Rick and Morty - Home">{page}</Layout>
}
