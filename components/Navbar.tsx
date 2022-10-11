import React from 'react'

import { Link, Button } from '@components'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'

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
      <Button onClick={onToggle} className="block sm:hidden">
        <Bars3Icon className="h-5 w-5" />
      </Button>
      <Transition
        show={toggle}
        enter="transition-opacity ease-in-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed top-[60px] left-0 right-0 bottom-0 bg-black bg-opacity-20" />
        <div className="w-full sm:hidden absolute bg-white inset-x-0 -bottom-36 px-5 py-5 shadow rounded-md">
          {paths.map((p, i) => (
            <Link key={p.id + i} href={p.path} className="text-center">
              {p.label}
            </Link>
          ))}
        </div>
      </Transition>
    </>
  )
}

export type NavbarProps = {}

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
