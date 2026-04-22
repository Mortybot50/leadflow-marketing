import { Link } from 'react-router-dom'
import { WordmarkAccent } from '@/components/brand/Wordmark'

const cols: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', to: '/how-it-works' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <WordmarkAccent size="base" />
            <p className="mt-4 max-w-xs text-sm text-zinc-500">
              The AI sales agent that actually books meetings.
            </p>
            <a
              href="mailto:hello@getleadflow.com"
              className="mt-4 inline-block text-sm text-zinc-400 hover:text-brand-400"
            >
              hello@getleadflow.com
            </a>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-sm text-zinc-600">
          <p>© {year} LeadFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
