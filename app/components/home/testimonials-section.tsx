export function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Atlas transformed how we manage our infrastructure. The onboarding was seamless and the team is incredibly responsive.',
      author: 'Sarah Chen',
      role: 'CTO at TechCorp',
      initials: 'SC'
    },
    {
      quote: "We've reduced our operational costs by 40% since switching to Atlas. The ROI was immediate and impressive.",
      author: 'James Mitchell',
      role: 'Engineering Lead at DataFlow',
      initials: 'JM'
    },
    {
      quote: 'The level of customization and flexibility Atlas provides is unmatched. It fits our workflow perfectly.',
      author: 'Elena Rodriguez',
      role: 'VP Product at CloudSync',
      initials: 'ER'
    }
  ]

  return (
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
            <div key={index} className="rounded-lg border border-border bg-card p-8 hover:border-accent/30 hover:shadow-md transition-all">
              <div className="mb-4 text-accent text-lg">?.?.?.?.?.</div>
              <p className="text-sm mb-6 text-foreground">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-xs font-semibold text-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
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
  )
}
