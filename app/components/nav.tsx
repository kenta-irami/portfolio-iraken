'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Works',
  },
  '/profile': {
    name: 'About',
  },
  '/contact': { name: 'Contact' }
}

export function Navbar() {
  let pathname = usePathname() || '/'

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-5 z-50">
        <nav
          className="flex flex-row items-start relative px-4 py-2 fade md:overflow-auto scroll-pr-6 md:relative backdrop-blur-md bg-white/70 dark:bg-[#111010]/70 border border-neutral-200 dark:border-neutral-800 rounded-full shadow-sm"
          id="nav"
        >
          <div className="flex flex-row space-x-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path)
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-3 m-0 rounded-full ${isActive
                    ? 'text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-medium'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    }`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
