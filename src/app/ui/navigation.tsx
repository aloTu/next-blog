'use client'

import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import Link from 'next/link'

export default function Navigation({
  navLinks,
}: {
  navLinks: { href: string; name: string }[]
}) {
  const pathname = usePathname()

  return (
    <>
      {navLinks.map((link, index) => {
        const isActive = pathname.startsWith(link.href)
        const isLast = index === navLinks.length - 1
        return (
          <Link
            className={classNames(
              'hover:underline',
              { 'text-heading': isActive },
              { 'mr-4': !isLast }
            )}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}
