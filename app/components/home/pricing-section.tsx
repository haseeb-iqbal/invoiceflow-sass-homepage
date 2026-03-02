"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import BillingToggle from "../billing-toggle";
import { BorderBeam } from "@/components/ui/border-beam";

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly",
  );

  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: 19,
      annualPrice: 189,
      description: "Perfect for getting started",
      features: [
        "Up to 10 clients",
        "Unlimited invoices",
        "Payment tracking",
        "Email support",
      ],
    },
    {
      name: "Professional",
      monthlyPrice: 39,
      annualPrice: 379,
      description: "For growing businesses",
      features: [
        "Unlimited clients",
        "Automated reminders",
        "Cash flow analytics",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Business",
      monthlyPrice: null,
      annualPrice: null,
      description: "For larger teams",
      features: [
        "Multiple team members",
        "Advanced reporting",
        "Dedicated support",
        "Custom integrations",
      ],
    },
  ];

  const getPrice = (plan: (typeof pricingPlans)[0]) => {
    if (!plan.monthlyPrice) return "Custom";
    return billingPeriod === "monthly"
      ? `$${plan.monthlyPrice}`
      : `$${plan.annualPrice}`;
  };

  const getAnnualSavings = (plan: (typeof pricingPlans)[0]) => {
    if (!plan.monthlyPrice) return null;
    const monthlyTotal = plan.monthlyPrice * 12;
    const savings = monthlyTotal - plan.annualPrice;
    return savings > 0 ? Math.round((savings / monthlyTotal) * 100) : 0;
  };

  return (
    <section
      id="pricing"
      className="border-y border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the perfect plan for your needs. Always flexible.
          </p>

          <div className="inline-flex rounded-full border-2 border-border bg-card  shadow-sm">
            <BillingToggle onChange={(val) => setBillingPeriod(val)} />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border transition-all hover:shadow-lg ${
                plan.highlighted
                  ? "border-primary/50 bg-gradient-to-br from-primary/8 to-accent/5 md:scale-105 shadow-xl ring-1 ring-primary/10"
                  : "border-border bg-card hover:border-accent/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
                    Most popular
                  </span>
                </div>
              )}
              {plan.highlighted && (
                <>
                  <BorderBeam
                    duration={6}
                    size={400}
                    className="from-transparent via-red-500 to-transparent"
                  />
                  <BorderBeam
                    duration={6}
                    delay={3}
                    size={400}
                    borderWidth={2}
                    className="from-transparent via-blue-500 to-transparent"
                  />
                </>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground">
                    {getPrice(plan)}
                  </div>
                  {plan.monthlyPrice && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {billingPeriod === "monthly"
                        ? "per month"
                        : `per year ${getAnnualSavings(plan) ? `(Save ${getAnnualSavings(plan)}%)` : ""}`}
                    </p>
                  )}
                </div>

                <Button
                  className={`w-full rounded-full mb-8 font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
                      : "border-accent text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.monthlyPrice ? "Start free trial" : "Contact sales"}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <Check
                        className={`h-4 w-4 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-accent" : "text-primary"}`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
