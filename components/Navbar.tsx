import React from 'react'

import { Link, Button } from '@components'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'

function MobileNavbar({
  paths
}: {
  paths: { id: string; label: string; path: string }[]
}) {
  const [toggle, setToggle] = React.useState<boolean>(false)

  function onCloseNav() {
    setToggle(prevState => !prevState)
  }

  return (
    <>
      <Button
        onClick={onCloseNav}
        onBlur={onCloseNav}
        className="block sm:hidden"
      >
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
        <div className="fixed sm:hidden top-[60px] left-0 right-0 bottom-0 bg-black bg-opacity-20 z-40" />
        <div className="w-full sm:hidden absolute bg-white inset-x-0 -bottom-36 px-5 py-5 shadow rounded-md z-50">
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
  const paths = [
    { id: '0x1', label: 'Characters', path: '/characters' },
    { id: '0x2', label: 'Locations', path: '/locations' }
  ]

  return (
    <nav>
      <div className="hidden sm:inline-flex sm:space-x-2">
        {paths.map((p, i) => (
          <Link key={p.id + i} href={p.path}>
            {p.label}
          </Link>
        ))}
      </div>
      <MobileNavbar paths={paths} />
    </nav>
  )
}
