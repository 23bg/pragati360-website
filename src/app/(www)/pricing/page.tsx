import { generateMetadata } from "@/lib/seo";
import { SITE_NAME, PRICING_PLANS } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata = generateMetadata({
  title: "Pricing",
  description: `Simple and transparent pricing plans for ${SITE_NAME}. Choose the perfect plan for your business.`,
});

export default function PricingPage() {
  return (
    <section className="w-full py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-foreground">
          Simple Pricing for Every Business
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          No hidden fees. Cancel anytime. Choose what works best for you.
        </p>

        {/* Pricing Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={plan.name}
              className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-soft border border-border flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {index === 2 && ( // Highlight Pro plan as most popular
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h2>
                <p className="text-muted-foreground mb-6 text-sm">
                  {/* Small description for each plan */}
                  {plan.name === "Starter" && "For new ventures and small businesses."}
                  {plan.name === "Basic" && "Ideal for growing businesses needing more reach."}
                  {plan.name === "Pro" && "Designed for established businesses seeking full control."}
                  {plan.name === "Business" && "Tailored for large enterprises with extensive needs."}
                </p>

                <p className="text-4xl font-bold text-foreground mb-6">
                  {plan.price}{" "}
                  <span className="text-muted-foreground text-lg">/mo</span>
                </p>

                <ul className="space-y-3 text-left mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild className="mt-8 w-full rounded-xl shadow-lg">
                <Link href="/contact">Get Started with {plan.name}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}