const companies = [
  'Northwind',
  'Acme Cloud',
  'Fieldstone',
  'Helix AI',
  'Prism',
  'Orbit Labs',
  'Beacon',
  'Voltage',
]

export function SocialProof() {
  // Duplicate list for seamless marquee loop
  const loop = [...companies, ...companies]

  return (
    <section
      aria-label="Trusted by"
      className="border-b border-white/5 bg-zinc-900/60 py-10"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <div className="flex animate-marquee gap-4 px-6">
          {loop.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className={[
                'shrink-0 rounded-full border px-5 py-2 text-sm font-medium',
                i === 3
                  ? 'border-brand-500/40 bg-brand-500/10 text-brand-300'
                  : 'border-white/5 bg-zinc-900 text-zinc-400',
              ].join(' ')}
            >
              {c}
            </span>
          ))}
        </div>
        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-900/90 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-900/90 to-transparent"
        />
      </div>
    </section>
  )
}
