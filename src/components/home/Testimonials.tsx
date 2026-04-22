import { Quote } from 'lucide-react'

// PLACEHOLDER TESTIMONIALS — no real names, no real numbers.
// Phase 1 copy only. Replace with real quotes at launch.
const testimonials = [
  {
    quote:
      "We stopped paying for an SDR seat and stopped missing follow-ups on the same day. LeadFlow runs the loop we could never staff.",
    attribution: 'Head of Sales, Series B SaaS',
  },
  {
    quote:
      "The personalisation is the bit that converted me. It's not a template with a first name — it's messaging grounded in something the prospect actually did last week.",
    attribution: 'Founder, Vertical B2B',
  },
  {
    quote:
      "My reps got 6 hours a week back. That time now goes into closing, not triaging replies.",
    attribution: 'VP Revenue, Mid-market Fintech',
  },
]

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="border-b border-white/5 bg-zinc-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
            From early users
          </span>
          <h2
            id="testimonials-title"
            className="mt-4 font-[Inter_Tight] text-4xl font-extrabold tracking-tight text-zinc-50 md:text-5xl"
          >
            What teams are saying.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-2xl border border-white/10 bg-zinc-900/60 p-8"
            >
              <Quote
                aria-hidden
                size={28}
                className="absolute top-6 right-6 text-brand-500/40"
              />
              <blockquote className="relative text-base leading-relaxed text-zinc-200">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-zinc-400">
                — {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
