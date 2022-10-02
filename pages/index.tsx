import React from 'react'

import { Heading, InlineLink, Layout } from '@components'

export default function Home() {
  return (
    <div className="text-center">
      <div className="my-5">
        <Heading data-testid="home-title">Rick and Morty</Heading>
        <p
          data-testid="home-description"
          className="w-full sm:w-8/12 my-20 mx-auto text-lg font-medium text-gray-500 leading-loose"
        >
          Rick and Morty is an American adult animated science-fiction sitcom
          created by Justin Roiland and Dan Harmon for Cartoon Network&apos;s
          nighttime programming block Adult Swim. It is distributed
          internationally by Warner Bros. Domestic Television.
        </p>
      </div>
      <p className="font-medium text-gray-500 mb-5">
        You can start by browsing the list of all known{' '}
        <InlineLink data-testid="home-link-characters" href={'/characters'}>
          Characters
        </InlineLink>{' '}
        or{' '}
        <InlineLink data-testid="home-link-locations" href={'/locations'}>
          Locations
        </InlineLink>
        .
      </p>
    </div>
  )
}

Home.pageLayout = (page: React.ReactElement) => {
  return <Layout title="Rick and Morty - Home">{page}</Layout>
}
