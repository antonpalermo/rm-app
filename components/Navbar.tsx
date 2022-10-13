import React from 'react'

import { Link, Button } from '@components'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'
import { useRouter } from 'next/router'

const paths = [
  { id: '0x1', label: 'Characters', path: '/characters' },
  { id: '0x2', label: 'Locations', path: '/locations' }
]

function Paths() {
  const router = useRouter()
  const match = (path: string) => router.pathname === path

  return (
    <>
      {paths.map((p, i) => (
        <Link
          key={p.id + i}
          href={p.path}
          className={`${match(p.path) ? 'text-blue-500 bg-blue-50' : ''}`}
        >
          {p.label}
        </Link>
      ))}
    </>
  )
}

export type NavbarProps = {}

export function Navbar({}: NavbarProps) {
  return (
    <nav>
      <div className="hidden sm:inline-flex sm:space-x-2">
        <Paths />
      </div>
      <MobileNavbar />
    </nav>
  )
}

function MobileNavbar() {
  const [toggle, setToggle] = React.useState<boolean>(false)

  function toggleMobileNav() {
    setToggle(prevState => !prevState)
  }

  return (
    <>
      <Button
        onClick={toggleMobileNav}
        onBlur={toggleMobileNav}
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
          <Paths />
        </div>
      </Transition>
    </>
  )
}
