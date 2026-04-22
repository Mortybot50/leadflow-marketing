import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function CaseStudyTeaser() {
  return (
    <section
      aria-labelledby="case-study-title"
      className="border-b border-white/5 bg-zinc-950 py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-10 md:p-14">
          {/* Amber glow accent edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-500/30 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-violet-500/15 blur-[80px]"
          />

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
              Case study
            </span>
            <h2
              id="case-study-title"
              className="mt-4 font-[Inter_Tight] text-3xl font-extrabold tracking-tight text-zinc-50 md:text-4xl"
            >
              See LeadFlow in action.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-300 md:text-lg">
              Our launch partners are using LeadFlow to cover accounts their human SDRs never had
              time to touch — surfacing live signals, drafting first-touch messaging, and handling
              inbound replies without a single "just checking in" follow-up.
            </p>
            <Link
              to="/how-it-works"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-brand-400 transition-colors hover:text-brand-300"
            >
              Read the case study
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
