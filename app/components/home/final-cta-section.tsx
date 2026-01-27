import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FinalCtaSection() {
  return (
    <section className="border-t border-border bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="text-lg mb-10 opacity-95">
          Join thousands of teams already using Atlas. Start your free 14-day trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/95 font-semibold shadow-lg">
            Get started free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-primary-foreground border-2 border-primary-foreground/40 hover:bg-primary-foreground/15 bg-transparent font-semibold backdrop-blur-sm">
            Schedule a demo
          </Button>
        </div>
      </div>
    </section>
  )
}
