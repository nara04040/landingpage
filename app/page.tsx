import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { PricingSection } from "@/components/pricing-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <ValuePropositionSection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
