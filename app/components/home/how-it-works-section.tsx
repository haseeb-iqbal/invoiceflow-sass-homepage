"use client";
import * as motion from "motion/react-client";
import { stagger } from "motion";

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Create your invoice",
      description: "Add clients, line items, and payment terms.",
    },
    {
      number: "2",
      title: "Send and track",
      description: "Share invoices and track their status in real time.",
    },
    {
      number: "3",
      title: "Get paid",
      description: "Accept payments and stay on top of your cash flow.",
    },
  ];

  const stepTransition = {
    duration: 0.4,
    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
  };

  const stepContainerVariant = {
    show: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="how-it-works"
      className="border-y border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get started in minutes
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, straightforward workflow to create invoices and get paid.
          </p>
        </div>

        <motion.div
          variants={stepContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              variants={stepVariants}
              transition={stepTransition}
              key={index}
              className="relative"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
