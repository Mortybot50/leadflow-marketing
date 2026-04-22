import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const partners = ['Northwind', 'Acme Cloud', 'Fieldstone', 'Helix AI', 'Prism', 'Orbit Labs']

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/5 bg-zinc-950 pt-16 pb-24 md:pt-28 md:pb-36"
    >
      {/* Subtle gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-0 -z-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5"
        >
          <Sparkles size={14} className="text-brand-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
            AI Sales Agent for B2B Teams
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mx-auto mt-8 max-w-4xl font-[Inter_Tight] text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          The AI sales agent that{' '}
          <span className="text-brand-500">actually books meetings</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl"
        >
          LeadFlow researches your ICP, writes the outreach, handles replies, and books the meeting
          — while your team focuses on closing. Built for B2B sales teams who are done babysitting
          automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="primary" size="lg" onClick={scrollToWaitlist}>
            Join the waitlist
          </Button>
          <Button variant="outline" size="lg" onClick={() => setVideoOpen(true)}>
            <Play size={16} />
            Watch 60s demo
          </Button>
        </motion.div>

        {/* Hero visual placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-2 shadow-2xl shadow-brand-500/10 ring-1 ring-brand-500/10">
            <div className="flex aspect-[16/10] items-center justify-center rounded-xl bg-zinc-900">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="rounded-full bg-brand-500/10 p-4">
                  <Play size={24} className="text-brand-400" />
                </div>
                <p className="text-sm font-medium text-zinc-400">Product demo — coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partner pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Trusted by early partners
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {partners.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/5 bg-zinc-900/50 px-4 py-1.5 text-sm font-medium text-zinc-400"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </section>
  )
}

function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Product demo video"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 p-6 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-8"
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-4 right-4 rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
        >
          ✕
        </button>
        <div className="flex aspect-video items-center justify-center rounded-xl bg-zinc-950">
          <div className="text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-brand-500/10 p-4">
              <Play size={28} className="text-brand-400" />
            </div>
            <p className="text-lg font-semibold text-zinc-100">Video coming soon</p>
            <p className="mt-2 text-sm text-zinc-400">
              A 60-second walkthrough of LeadFlow will live here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
