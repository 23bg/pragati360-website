import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS } from "@/lib/constants";
import { Check } from "lucide-react";

export function PricingPreviewSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Simple & Transparent Pricing
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your business needs. Upgrade or downgrade anytime.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-soft border border-border flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-4 text-4xl font-bold text-foreground">
                  {plan.price}
                  <span className="text-base font-medium text-muted-foreground">/month</span>
                </p>
                <ul className="mt-8 space-y-4 text-left text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="mt-8 w-full rounded-xl shadow-lg">
                <Link href="/pricing">Get Started with {plan.name}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button size="lg" asChild className="text-base px-8 py-6 rounded-xl shadow-lg">
            <Link href="/pricing">View All Pricing Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
