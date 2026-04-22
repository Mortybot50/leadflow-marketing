import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface StubPageProps {
  title: string
  description: string
}

export function StubPage({ title, description }: StubPageProps) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6 py-24">
      <span className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
        Coming soon
      </span>
      <h1 className="font-[Inter_Tight] text-5xl font-extrabold tracking-tight text-zinc-50 md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-xl text-lg text-zinc-400">{description}</p>
      <p className="mt-4 text-sm text-zinc-500">
        This page ships in Phase 2. In the meantime, join the waitlist to get notified when it goes live.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>
    </section>
  )
}
