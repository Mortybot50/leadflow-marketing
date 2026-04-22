import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface Tier {
  name: string
  tagline: string
  features: string[]
  highlight?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Starter',
    tagline: 'For small teams getting started with AI outbound.',
    features: ['Up to 1,000 prospects / month', 'Email outreach', '1 user seat', 'Reply triage'],
  },
  {
    name: 'Pro',
    tagline: 'For sales teams running serious outbound motion.',
    features: [
      'Up to 10,000 prospects / month',
      'Email + LinkedIn outreach',
      'Up to 5 user seats',
      'CRM sync (HubSpot, Salesforce)',
      'Signal-based triggers',
    ],
    highlight: true,
  },
  {
    name: 'Scale',
    tagline: 'For revenue orgs running LeadFlow across multiple teams.',
    features: [
      'Unlimited prospects',
      'All channels + custom workflows',
      'Unlimited seats',
      'Dedicated success manager',
      'SSO + advanced security',
    ],
  },
]

function scrollToWaitlist() {
  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function PricingTeaser() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-b border-white/5 bg-zinc-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
            Pricing
          </span>
          <h2
            id="pricing-title"
            className="mt-4 font-[Inter_Tight] text-4xl font-extrabold tracking-tight text-zinc-50 md:text-5xl"
          >
            Simple plans. Scaled to your pipeline.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Pricing set at launch. Early waitlist members get founding-customer rates.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'relative rounded-2xl border bg-zinc-900/60 p-8 transition-all',
                tier.highlight
                  ? 'border-brand-500/50 bg-gradient-to-b from-brand-500/5 to-zinc-900/60 shadow-xl shadow-brand-500/10'
                  : 'border-white/10 hover:border-white/20',
              )}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-950">
                  Most popular
                </span>
              )}
              <h3 className="font-[Inter_Tight] text-2xl font-bold text-zinc-50">{tier.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{tier.tagline}</p>

              <div className="mt-6 border-t border-white/5 pt-6">
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check
                        size={18}
                        className={cn(
                          'mt-0.5 shrink-0',
                          tier.highlight ? 'text-brand-400' : 'text-zinc-500',
                        )}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={tier.highlight ? 'primary' : 'outline'}
                size="md"
                className="mt-8 w-full"
                onClick={scrollToWaitlist}
              >
                Join waitlist for pricing
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
