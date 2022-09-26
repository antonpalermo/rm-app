import React from 'react'

export type FooterProps = {
  routes: { label: string; path: string }[]
}

export default function Footer({ routes }: FooterProps) {
  return (
    <footer className="w-full bg-gray-100">
      <div className="w-full sm:w-9/12 mx-auto px-5">sample</div>
    </footer>
  )
}
