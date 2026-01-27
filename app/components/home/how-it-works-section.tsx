export function HowItWorksSection() {
  const steps = [
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
  ]

  return (
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
          {steps.map((step, index) => (
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
  )
}
