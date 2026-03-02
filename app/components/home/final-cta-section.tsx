import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";

export function FinalCtaSection() {
  return (
    <section className="border-t border-border bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to simplify invoicing?
        </h2>
        <p className="text-lg mb-10 opacity-95">
          Join thousands of businesses already using InvoiceFlow to get paid
          faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="relative rounded-full p-1">
            <Button
              size="lg"
              className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/95 font-semibold shadow-lg"
              asChild
            >
              <a
                href="https://github.com/haseeb-iqbal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Start free trial </p>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <BorderBeam
              size={40}
              borderWidth={6}
              duration={4}
              className="from-transparent via-blue-100 to-transparent"
            />
          </div>
          <div className="relative rounded-full py-1 -mx-2">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-primary-foreground border-2 border-primary-foreground/40 hover:bg-primary-foreground/15 bg-transparent font-semibold backdrop-blur-sm"
              asChild
            >
              <a
                href="https://github.com/haseeb-iqbal"
                target="_blank"
                rel="noopener noreferrer"
              >
                View demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
