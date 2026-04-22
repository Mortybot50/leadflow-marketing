import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

type State = 'idle' | 'submitting' | 'success'

export function WaitlistBand() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<State>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || state !== 'idle') return

    setState('submitting')
    // STUB: Phase 3 will wire to Supabase. For now: log + simulate success.
    console.info('[LeadFlow waitlist][Phase 1 stub] signup:', email)
    setTimeout(() => {
      setState('success')
    }, 600)
  }

  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-title"
      className="relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-500 to-lime-400 py-24 md:py-32"
    >
      {/* Subtle overlay pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(9,9,11,0.3) 0, transparent 40%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2
          id="waitlist-title"
          className="font-[Inter_Tight] text-4xl font-extrabold tracking-tight text-zinc-950 md:text-5xl"
        >
          Get early access to LeadFlow.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-900/80">
          We're onboarding a small group of launch partners. Waitlist members get founding pricing
          and priority access.
        </p>

        <div className="mt-10">
          {state === 'success' ? (
            <SuccessCard email={email} />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
              aria-label="Join the waitlist"
            >
              <label htmlFor="waitlist-email" className="sr-only">
                Work email
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 flex-1 rounded-xl border border-zinc-950/20 bg-zinc-950/90 px-5 text-base text-zinc-50 placeholder:text-zinc-500 focus:border-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950"
                disabled={state === 'submitting'}
              />
              <Button
                type="submit"
                variant="dark"
                size="lg"
                disabled={state === 'submitting' || !email}
              >
                {state === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting
                  </>
                ) : (
                  'Join waitlist'
                )}
              </Button>
            </form>
          )}
        </div>

        <p className="mt-6 text-sm text-zinc-900/70">
          We'll email you at <strong>hello@getleadflow.com</strong> with updates.
        </p>
      </div>
    </section>
  )
}

function SuccessCard({ email }: { email: string }) {
  return (
    <div
      role="status"
      className="mx-auto max-w-lg rounded-2xl bg-zinc-950 p-6 text-left shadow-2xl"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-full bg-brand-500/10 p-2">
          <CheckCircle2 size={24} className="text-brand-400" />
        </div>
        <div>
          <h3 className="font-[Inter_Tight] text-lg font-bold text-zinc-50">You're on the list.</h3>
          <p className="mt-1 text-sm text-zinc-400">
            We'll send an intro to <span className="font-mono text-zinc-200">{email}</span> shortly.
            Replies go to <strong>hello@getleadflow.com</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}
