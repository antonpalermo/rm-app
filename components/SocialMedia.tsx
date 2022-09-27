import Link from 'next/link'
import React from 'react'

import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'

export default function SocialMedia() {
  const socialLinks = [
    {
      link: 'https://github.com/antonpalermo',
      icon: <TbBrandGithub size={'23px'} />
    },
    {
      link: 'https://www.linkedin.com/in/antonpalermo',
      icon: <TbBrandLinkedin size={'25px'} />
    }
  ]

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-500 mb-2">Social</h3>
      <div className="inline-flex space-x-2">
        {socialLinks.map((social, index) => (
          <Link key={social.link + index} href={social.link} passHref>
            <a className="block p-2 hover:bg-gray-100 rounded-md">
              {social.icon}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
