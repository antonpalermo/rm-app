import React from 'react'

import { Link, Button } from '@components'
import { Bars3Icon } from '@heroicons/react/20/solid'

export type NavbarProps = {}

function MobileNavbar({
  paths,
  toggle,
  onToggle
}: {
  toggle: boolean
  onToggle: () => void
  paths: { id: string; label: string; path: string }[]
}) {
  return (
    <>
      {toggle && <h1>toggled</h1>}
      <Button onClick={onToggle} className="block sm:hidden">
        <Bars3Icon className="h-5 w-5" />
      </Button>
    </>
  )
}

export function Navbar({}: NavbarProps) {
  const [toggle, setToggle] = React.useState<boolean>(false)
  const paths = [
    { id: '0x1', label: 'Characters', path: '/characters' },
    { id: '0x2', label: 'Locations', path: '/locations' }
  ]

  function toggleNav() {
    setToggle(prev => !prev)
  }

  return (
    <nav>
      <div className="hidden sm:inline-flex sm:space-x-2">
        {paths.map((p, i) => (
          <Link key={p.id + i} href={p.path}>
            {p.label}
          </Link>
        ))}
      </div>
      <MobileNavbar toggle={toggle} onToggle={toggleNav} paths={paths} />
    </nav>
  )
}
