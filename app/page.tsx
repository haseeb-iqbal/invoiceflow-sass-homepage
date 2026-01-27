import {
  Navbar,
  HeroSection,
  LogoCloud,
  FeaturesSection,
  HowItWorksSection,
  TestimonialsSection,
  PricingSection,
  FaqSection,
  FinalCtaSection,
  FooterSection
} from './components/home'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </div>
  )
}
