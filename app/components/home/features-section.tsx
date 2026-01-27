import { BarChart3, Globe, Lightbulb, Shield, Users, Zap } from 'lucide-react'

export function FeaturesSection() {
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

  return (
    <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help teams build, deploy, and scale web applications with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="group relative rounded-lg border border-border bg-card p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-primary/15 to-accent/10 p-3 group-hover:from-primary/20 group-hover:to-accent/15 transition-all">
                  <Icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
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
  )
}
