import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Define your ICP',
    body: 'Describe your ideal customer in plain English — industry, title, signals, geography. LeadFlow converts it into a structured target profile the agent can act on.',
  },
  {
    num: '02',
    title: 'Research your prospects',
    body: 'The agent enriches every lead with firmographic signals, intent data, hiring patterns, and public news. No more blind outreach.',
  },
  {
    num: '03',
    title: 'Reach out with intelligence',
    body: 'LeadFlow drafts personalised email and LinkedIn sequences that reference real signals. Your team approves; the agent sends, follows up, and adjusts.',
  },
  {
    num: '04',
    title: 'Book the meeting',
    body: 'Replies are triaged by intent. Positive responses are scheduled automatically. Ambiguous ones surface in your inbox with context and a suggested reply.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="hiw-title"
      className="border-b border-white/5 bg-zinc-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
            How it works
          </span>
          <h2
            id="hiw-title"
            className="mt-4 font-[Inter_Tight] text-4xl font-extrabold tracking-tight text-zinc-50 md:text-5xl"
          >
            Outbound, without the babysitting.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            LeadFlow runs the full top-of-funnel loop so your reps only touch conversations that are
            worth their time.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-zinc-900/40 p-8 transition-colors hover:border-brand-500/30"
            >
              <span
                aria-hidden
                className="font-[Inter_Tight] text-6xl font-extrabold leading-none text-transparent md:text-7xl"
                style={{
                  WebkitTextStroke: '1.5px rgb(245 158 11 / 0.6)',
                }}
              >
                {s.num}
              </span>
              <h3 className="mt-6 font-[Inter_Tight] text-2xl font-bold text-zinc-50">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-400">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
