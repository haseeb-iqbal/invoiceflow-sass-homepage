'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ArrowRight, Check, Zap, BarChart3, Shield, Globe, Users, Lightbulb, Sliders, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { FakeDashboardPreview } from '@/components/fake-dashboard-preview'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  const logos = [
    'TechCorp',
    'DataFlow',
    'CloudSync',
    'NeuralWave',
    'MetaGrid',
    'VelocityAI'
  ]

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Ultra-optimized performance with 99.99% uptime guarantee'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Distributed infrastructure across 6 continents for low-latency access'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time teamwork with granular permissions and audit logs'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights with customizable dashboards and real-time reporting'
    },
    {
      icon: Lightbulb,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms to optimize your workflow automatically'
    }
  ]

  const testimonials = [
    {
      quote: "Atlas transformed how we manage our infrastructure. The onboarding was seamless and the team is incredibly responsive.",
      author: "Sarah Chen",
      role: "CTO at TechCorp",
      initials: "SC"
    },
    {
      quote: "We've reduced our operational costs by 40% since switching to Atlas. The ROI was immediate and impressive.",
      author: "James Mitchell",
      role: "Engineering Lead at DataFlow",
      initials: "JM"
    },
    {
      quote: "The level of customization and flexibility Atlas provides is unmatched. It fits our workflow perfectly.",
      author: "Elena Rodriguez",
      role: "VP Product at CloudSync",
      initials: "ER"
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      monthlyPrice: 99,
      annualPrice: 990,
      description: 'Perfect for teams getting started',
      features: ['Up to 5 team members', 'Basic analytics', '5GB storage', 'Community support', 'API access']
    },
    {
      name: 'Professional',
      monthlyPrice: 299,
      annualPrice: 2990,
      description: 'For growing organizations',
      features: ['Up to 50 team members', 'Advanced analytics', '500GB storage', 'Priority support', 'Custom integrations', 'SSO & 2FA'],
      highlighted: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      annualPrice: null,
      description: 'For large-scale deployments',
      features: ['Unlimited team members', 'Custom analytics', 'Unlimited storage', '24/7 dedicated support', 'Custom SLA', 'On-premise option']
    }
  ]

  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and cryptocurrency for Enterprise customers.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Absolutely. Start with a 14-day free trial with full access to all Professional features. No credit card required.'
    },
    {
      question: 'How do you handle data security?',
      answer: 'We use end-to-end encryption, regular security audits, and maintain SOC 2 Type II compliance. All data is encrypted at rest and in transit.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include email support. Professional plans get priority support with 4-hour response times. Enterprise includes 24/7 dedicated support.'
    }
  ]

  const getPrice = (plan: typeof pricingPlans[0]) => {
    if (!plan.monthlyPrice) return 'Custom'
    return billingPeriod === 'monthly' ? `$${plan.monthlyPrice}` : `$${plan.annualPrice}`
  }

  const getAnnualSavings = (plan: typeof pricingPlans[0]) => {
    if (!plan.monthlyPrice) return null
    const monthlyTotal = plan.monthlyPrice * 12
    const savings = monthlyTotal - plan.annualPrice
    return savings > 0 ? Math.round((savings / monthlyTotal) * 100) : 0
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Atlas
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                How it works
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sign in
            </button>
            <Button className="rounded-full">
              Start free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-4">
              <Link href="#features" className="block text-sm text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link href="#how-it-works" className="block text-sm text-muted-foreground hover:text-foreground">
                How it works
              </Link>
              <Link href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Link href="#faq" className="block text-sm text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
              <button className="block text-sm text-muted-foreground hover:text-foreground">
                Sign in
              </button>
              <Button className="w-full rounded-full">
                Start free
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Trust line */}
          <div className="mb-8 flex justify-center">
            <div className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              Trusted by 5,000+ companies worldwide
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6">
            The complete platform to build the web
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
            Everything you need to create, deploy, and scale modern web experiences. From infrastructure to analytics, Atlas is your all-in-one solution.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="rounded-full h-11">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-11 bg-transparent">
              Watch demo
            </Button>
          </div>

          {/* Product preview / Dashboard mock */}
          <FakeDashboardPreview />
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="border-y border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {logos.map((logo) => (
              <div 
                key={logo}
                className="h-10 flex items-center justify-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything you need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help teams build, deploy, and scale web applications with confidence.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="group relative rounded-lg border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get started in minutes
            </h2>
            <p className="text-lg text-muted-foreground">
              A simple, straightforward workflow to set up Atlas and start building.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Create your account',
                description: 'Sign up with your email or GitHub. Takes less than 30 seconds.'
              },
              {
                number: '2',
                title: 'Configure your workspace',
                description: 'Add your team, set up integrations, and configure your deployment preferences.'
              },
              {
                number: '3',
                title: 'Deploy and scale',
                description: 'Push your code and watch it deploy automatically. Scale globally with one click.'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Loved by teams everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers have to say about Atlas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-8">
                <p className="text-sm mb-6 text-foreground italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-y border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose the perfect plan for your needs. Always flexible.
            </p>

            {/* Billing toggle */}
            <div className="inline-flex rounded-full border border-border bg-card p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === 'monthly'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === 'annual'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual
              </button>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg border transition-all ${
                  plan.highlighted
                    ? 'border-primary bg-primary/5 md:scale-105 shadow-lg'
                    : 'border-border bg-card'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-4xl font-bold">
                      {getPrice(plan)}
                    </div>
                    {plan.monthlyPrice && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {billingPeriod === 'monthly' ? 'per month' : `per year ${getAnnualSavings(plan) ? `(Save ${getAnnualSavings(plan)}%)` : ''}`}
                      </p>
                    )}
                  </div>

                  <Button
                    className="w-full rounded-full mb-8"
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    {plan.monthlyPrice ? 'Start free trial' : 'Contact sales'}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Atlas.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="py-4 hover:no-underline">
                  <span className="text-left font-semibold">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-primary text-primary-foreground px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of teams already using Atlas. Start your free 14-day trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get started free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 bg-transparent">
              Schedule a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Security</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">API Reference</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Support</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Cookies</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">GDPR</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2026 Atlas. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-foreground transition-colors">GitHub</Link>
              <Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
