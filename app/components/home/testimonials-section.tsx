export function TestimonialsSection() {
  const testimonials = [
    {
      quote: `InvoiceFlow cut our average payment time in half. It's simple, clean, and does exactly what we need.`,
      author: "Sarah Chen",
      role: "Freelance Designer",
      initials: "SC",
    },
    {
      quote:
        "Finally, an invoicing tool that doesn't feel bloated. The dashboard alone is worth it.",
      author: "Mark Robinson",
      role: "Studio Owner",
      initials: "MR",
    },
    {
      quote: `Tracking overdue invoices used to be a nightmare. Now it's effortless.`,
      author: "Aisha Khan",
      role: "Consultant",
      initials: "AK",
    },
  ];

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Loved by freelancers and small teams
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about InvoiceFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-8 hover:border-accent/30 hover:shadow-md transition-all"
            >
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
  );
}
