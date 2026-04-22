import { cn } from '@/lib/utils'

interface WordmarkProps {
  className?: string
  /** Small = 24px, base = 32px, large = 48px */
  size?: 'sm' | 'base' | 'lg'
}

/**
 * "leadflow" wordmark with amber dot on the "i".
 * Pure CSS — font loaded via @fontsource/inter-tight.
 */
export function Wordmark({ className, size = 'base' }: WordmarkProps) {
  const sizeClasses = {
    sm: 'text-xl',
    base: 'text-2xl',
    lg: 'text-4xl',
  }

  return (
    <span
      className={cn(
        'inline-flex items-baseline font-[Inter_Tight] font-extrabold tracking-tight text-zinc-50 select-none',
        sizeClasses[size],
        className,
      )}
      aria-label="LeadFlow"
    >
      <span>leadflow</span>
    </span>
  )
}

/**
 * Variant: wordmark with an amber "flow" suffix in brand color.
 */
export function WordmarkAccent({ className, size = 'base' }: WordmarkProps) {
  const sizeClasses = {
    sm: 'text-xl',
    base: 'text-2xl',
    lg: 'text-4xl',
  }

  return (
    <span
      className={cn(
        'inline-flex items-baseline font-[Inter_Tight] font-extrabold tracking-tight select-none',
        sizeClasses[size],
        className,
      )}
      aria-label="LeadFlow"
    >
      <span className="text-zinc-50">lead</span>
      <span className="text-brand-500">flow</span>
    </span>
  )
}
