import {
  FileText,
  DollarSign,
  Bell,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "Professional invoices",
      description: "Create clean, branded invoices in minutes.",
    },
    {
      icon: DollarSign,
      title: "Payment tracking",
      description: `See who has paid, who hasn't, and what's overdue.`,
    },
    {
      icon: Bell,
      title: "Automated reminders",
      description:
        "Send polite reminders automatically to reduce late payments.",
    },
    {
      icon: TrendingUp,
      title: "Cash flow insights",
      description: "Understand your revenue trends and forecast income.",
    },
    {
      icon: Users,
      title: "Client management",
      description: "Keep all client and billing details in one place.",
    },
    {
      icon: Globe,
      title: "Multi-currency support",
      description: "Invoice clients anywhere in the world.",
    },
  ];

  return (
    <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything you need to manage invoicing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you get paid faster and stay
            organized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-lg border border-border bg-card p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              >
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
