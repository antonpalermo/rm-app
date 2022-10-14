import React from 'react'
import EmailForm from './Email'
import FooterLinks from './FooterLinks'
import SocialMedia from './SocialMedia'

export type FooterProps = {
  routes: { label: string; path: string }[]
}

export default function Footer() {
  const routes = [
    {
      label: 'Rick and Morty API Resources',
      routes: [
        {
          label: 'API Documentation',
          path: 'https://rickandmortyapi.com/'
        },
        {
          label: 'Github',
          path: 'https://github.com/afuh/rick-and-morty-api'
        },
        {
          label: 'Twitter',
          path: 'https://twitter.com/rickandmortyapi'
        },
        {
          label: 'Axel Fuhrmann',
          path: 'https://github.com/afuh'
        }
      ]
    }
  ]

  return (
    <footer className="bg-white shadow">
      <div className="container">
        <div className="w-full flex flex-col sm:flex-row items-start justify-between py-10">
          {routes.map((route, index) => (
            <div key={route.label + index} className=" inline-flex">
              <div>
                <span className="block text-gray-500 text-sm font-semibold my-3">
                  {route.label}
                </span>
                {route.routes.map((path, index) => (
                  <FooterLinks key={path.label + index} href={path.path}>
                    {path.label}
                  </FooterLinks>
                ))}
              </div>
            </div>
          ))}
          <div className="my-3 w-full sm:w-auto">
            <SocialMedia />
            <EmailForm />
          </div>
        </div>
      </div>
    </footer>
  )
}
