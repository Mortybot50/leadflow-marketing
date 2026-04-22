import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { WordmarkAccent } from '@/components/brand/Wordmark'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const nav = [
  { to: '/how-it-works', label: 'How it works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="LeadFlow home" className="flex items-center">
          <WordmarkAccent size="base" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-100',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" variant="primary" onClick={() => scrollToWaitlist()}>
            Join waitlist
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-zinc-300 hover:bg-zinc-900 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-zinc-950 md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-3 text-base font-medium',
                    isActive ? 'bg-zinc-900 text-zinc-50' : 'text-zinc-300 hover:bg-zinc-900',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              size="md"
              variant="primary"
              className="mt-2"
              onClick={() => {
                setOpen(false)
                scrollToWaitlist()
              }}
            >
              Join waitlist
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function scrollToWaitlist() {
  const el = document.getElementById('waitlist')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
