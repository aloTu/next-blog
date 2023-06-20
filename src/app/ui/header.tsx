import Link from 'next/link'
import ColorModeBtn from '@/app/ui/colorMode-btn'
import Navigation from '@/app/ui/navigation'
import { fetchAPI } from '@/lib/api'
import type { IStrapData } from '@/lib/api'

const Header = async () => {
  const { data } = await fetchAPI<
    IStrapData<{
      externalLinks: { name: string; url: string }[]
    }>
  >('/about', { populate: 'externalLinks' })
  const links = data.attributes.externalLinks
  return (
    <header className="mb-16 sm:mb-32">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-heading font-semibold text-[1.5rem]/relaxed sm:text-3xl/relaxed"
          aria-current="page"
          aria-label="Alo - Back to home"
        >
          Alo
        </Link>
        <ColorModeBtn />
      </div>
      <div className="flex border-b border-solid border-divide pb-4 items-center justify-between mt-4 text-secondary flex-wrap">
        <nav className="sm:text-lg/relaxed">
          <Navigation
            navLinks={[
              { href: '/blog', name: 'Blog' },
              { href: '/tags', name: 'Tag' },
              { href: '/friends', name: 'Friend' },
            ]}
          />
        </nav>
        <div className="sm:text-lg">
          {links.map((link) => (
            <a href={link.url} key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
