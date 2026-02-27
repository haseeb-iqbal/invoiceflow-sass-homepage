import { CometCard } from "@/components/ui/comet-card";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: `InvoiceFlow cut our average payment time in half. It's simple, clean, and does exactly what we need.`,
      author: "Sarah Chen",
      role: "Freelance Designer",
      image:
        "https://pixabay.com/images/download/kemdauart-portrait-5601950_640.jpg",
    },
    {
      quote: `Tracking overdue invoices used to be a nightmare. Now it's effortless.`,
      author: "Emma Williams",
      role: "Consultant",
      image:
        "https://pixabay.com/images/download/fanofthe5-girl-4806746_640.jpg",
    },
    {
      quote:
        "Finally, an invoicing tool that doesn't feel bloated. The dashboard alone is worth it.",
      author: "Mark Robinson",
      role: "Studio Owner",
      image:
        "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg",
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
            <CometCard key={index}>
              <div className="rounded-lg border border-border bg-card p-8 hover:border-accent/30 hover:shadow-md transition-all w-full bg-cover bg-center">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-15 "
                    style={{
                      backgroundImage: `url('${testimonial.image}')`,
                      filter: "grayscale(100%)",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-blue-500/40 mix-blend-multiply"></div>
                </div>

                <p className=" mb-6 text-foreground z-10 relative text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 justify-end">
                  <div className="flex items-end flex-col">
                    <p className=" font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
}
