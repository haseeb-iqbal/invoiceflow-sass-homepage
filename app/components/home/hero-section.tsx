import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FakeDashboardPreview } from "@/components/fake-dashboard-preview";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6 text-foreground">
          The complete platform to build the web
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground text-balance mb-10 leading-relaxed">
          Everything you need to create, deploy, and scale modern web
          experiences. From infrastructure to analytics, Atlas is your
          all-in-one solution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            size="lg"
            className="rounded-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Get started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-12 border-2 border-primary text-primary hover:bg-primary/5 font-semibold transition-all bg-transparent"
          >
            Watch demo
          </Button>
        </div>

        <FakeDashboardPreview />
      </div>
    </section>
  );
}
