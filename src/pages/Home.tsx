import { Hero } from '@/components/home/Hero'
import { SocialProof } from '@/components/home/SocialProof'
import { HowItWorks } from '@/components/home/HowItWorks'
import { FeatureGrid } from '@/components/home/FeatureGrid'
import { CaseStudyTeaser } from '@/components/home/CaseStudyTeaser'
import { Testimonials } from '@/components/home/Testimonials'
import { PricingTeaser } from '@/components/home/PricingTeaser'
import { WaitlistBand } from '@/components/home/WaitlistBand'

export function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <FeatureGrid />
      <CaseStudyTeaser />
      <Testimonials />
      <PricingTeaser />
      <WaitlistBand />
    </>
  )
}
