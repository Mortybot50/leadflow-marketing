import { motion } from 'framer-motion'
import {
  Radar,
  Sparkles,
  Mail,
  MessageSquare,
  Database,
  LineChart,
  type LucideIcon,
} from 'lucide-react'

type Accent = 'amber' | 'lime' | 'cyan' | 'violet'

interface Feature {
  icon: LucideIcon
  title: string
  body: string
  accent: Accent
}

const features: Feature[] = [
  {
    icon: Radar,
    title: 'Signal-based prospecting',
    body: 'Trigger outreach on real buying signals — funding, hiring, tech stack changes, job posts.',
    accent: 'amber',
  },
  {
    icon: Sparkles,
    title: 'AI-drafted outreach',
    body: 'Every message is grounded in specific facts about the prospect. No generic spray-and-pray.',
    accent: 'lime',
  },
  {
    icon: Mail,
    title: 'Multi-channel (email + LinkedIn)',
    body: 'Coordinated sequences across inbox and LinkedIn so your prospect sees a coherent conversation.',
    accent: 'amber',
  },
  {
    icon: MessageSquare,
    title: 'Reply handling',
    body: 'The agent triages replies, books meetings, and escalates the ones that need a human.',
    accent: 'cyan',
  },
  {
    icon: Database,
    title: 'CRM integration',
    body: 'Bidirectional sync with HubSpot and Salesforce. Activity, notes, and meeting bookings — all logged.',
    accent: 'amber',
  },
  {
    icon: LineChart,
    title: 'Team-wide insights',
    body: 'See what messaging is working, what segments convert, and where your funnel is leaking.',
    accent: 'violet',
  },
]

const accentMap: Record<Accent, { bg: string; text: string; ring: string }> = {
  amber: { bg: 'bg-brand-500/10', text: 'text-brand-400', ring: 'ring-brand-500/20' },
  lime: { bg: 'bg-lime-500/10', text: 'text-lime-400', ring: 'ring-lime-500/20' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', ring: 'ring-cyan-500/20' },
  violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', ring: 'ring-violet-500/20' },
}

export function FeatureGrid() {
  return (
    <section
      aria-labelledby="features-title"
      className="border-b border-white/5 bg-zinc-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
            Features
          </span>
          <h2
            id="features-title"
            className="mt-4 font-[Inter_Tight] text-4xl font-extrabold tracking-tight text-zinc-50 md:text-5xl"
          >
            Built for sales teams that ship.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon
            const accent = accentMap[f.accent]
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-2xl bg-zinc-900/60 p-6 ring-1 ring-white/10 transition-all hover:ring-white/20"
              >
                <div className={`inline-flex rounded-xl p-3 ${accent.bg} ring-1 ${accent.ring}`}>
                  <Icon className={accent.text} size={22} />
                </div>
                <h3 className="mt-5 font-[Inter_Tight] text-xl font-bold text-zinc-50">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
