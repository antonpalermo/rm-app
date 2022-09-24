import Head from 'next/head'
import { ReactElement } from 'react'

type LayoutProps = {
  title?: string
  children: ReactElement
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full sm:w-9/12 mx-auto px-5">{children}</div>
    </>
  )
}
