import React from 'react'
import FooterLinks from './FooterLinks'

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
    <footer className="w-full border-t border-gray-100 bg-gray-50">
      <div className="w-full sm:w-9/12 mx-auto px-5">
        {routes.map((route, index) => (
          <div key={route.label + index} className="py-10 inline-flex">
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
      </div>
    </footer>
  )
}
