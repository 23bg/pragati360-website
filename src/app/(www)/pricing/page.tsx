import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = generateMetadata({
  title: "Transparent Pricing for Reliable Growth",
  description:
    "Pragati360 offers straightforward pricing tailored for local businesses. Start exploring our platform in Early Access with plans starting from ₹199/month.",
});

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "₹199",
    description: "Essential tools to get started",
    features: [
      "Basic business profile",
      "Limited integrations",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "₹399",
    description: "For growing local businesses",
    features: [
      "Everything in Starter",
      "Social posting tools",
      "Basic analytics",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₹699",
    description: "Advanced control & insights",
    features: [
      "Everything in Growth",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "₹999",
    description: "For multi-outlet operations",
    features: [
      "Everything in Pro",
      "Multi-location support",
      "Dedicated onboarding",
    ],
  },
];

export default function PricingPage() {
  return (
    <section className="w-full py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Transparent Pricing for Reliable Growth
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Pragati360 offers straightforward pricing tailored for local businesses.
          Start exploring our platform in Early Access with plans starting from ₹199/month.
        </p>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={[
                "relative flex flex-col rounded-xl border bg-card p-6 shadow-sm transition",
                plan.highlighted
                  ? "border-primary shadow-lg scale-[1.02]"
                  : "border-border",
              ].join(" ")}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </span>
              )}

              <h3 className="font-heading text-xl font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6 text-4xl font-bold text-foreground">
                {plan.price}
                <span className="text-base font-normal text-muted-foreground">
                  /month
                </span>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="mt-auto rounded-lg"
                variant={plan.highlighted ? "default" : "outline"}
              >
                <Link href="/early-access">Get Early Access</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-20 max-w-3xl mx-auto space-y-6 text-left">
          <h2 className="text-2xl font-bold text-foreground">
            Our Early Access Pricing Philosophy
          </h2>
          <p className="text-lg text-muted-foreground">
            Our Early Access pricing is designed to be accessible and reflective
            of the core value Pragati360 delivers. This phase allows us to
            understand your specific needs and gather feedback to shape our
            future offerings.
          </p>
          <p className="text-lg text-muted-foreground">
            Access is not through an immediate checkout process. We're carefully
            onboarding businesses to ensure a quality experience and meaningful
            feedback.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-border pt-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="px-8 py-4 rounded-xl">
              <Link href="/early-access">Get Early Access</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-8 py-4 rounded-xl"
            >
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


// import { generateMetadata } from "@/lib/seo";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export const metadata = generateMetadata({
//   title: "Transparent Pricing for Reliable Growth",
//   description: "Pragati360 offers straightforward pricing tailored for local businesses. Start exploring our platform in Early Access with plans starting from ₹199/month.",
// });

// export default function PricingPage() {
//   return (
//     <section className="w-full py-16 sm:py-24 bg-background">
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
//           Transparent Pricing for Reliable Growth
//         </h1>
//         <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
//           Pragati360 offers straightforward pricing tailored for local businesses. Start exploring our platform in Early Access with plans starting from ₹199/month.
//         </p>

//         <div className="mt-12 max-w-3xl mx-auto space-y-8 text-left">
//           <h2 className="text-2xl font-bold text-foreground mb-4">Our Early Access Pricing Philosophy</h2>
//           <p className="text-lg text-muted-foreground">
//             Our Early Access pricing is designed to be accessible and reflective of the core value Pragati360 delivers. This phase allows us to understand your specific needs and gather feedback to shape our future offerings. You'll receive full access to selected features at a special introductory rate.
//           </p>
//           <p className="text-5xl font-bold text-foreground text-center">
//             Plans starting from ₹199/month
//           </p>
//           <p className="text-lg text-muted-foreground">
//             Access to Pragati360 during Early Access is not through an immediate checkout process. We're carefully onboarding businesses to ensure a quality experience and gather valuable insights.
//           </p>
//           <p className="text-lg text-muted-foreground">
//             We're building Pragati360 with local businesses in mind, and that includes fair and transparent pricing. There are no hidden fees or complex tiers. During Early Access, we're focused on building relationships and a product that truly serves your needs. Join us to experience a platform that prioritizes reliability over hype.
//           </p>

//           <div className="text-center pt-8 border-t border-border mt-8">
//             <h2 className="text-2xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Button size="lg" asChild className="px-8 py-4 rounded-xl shadow-lg">
//                 <Link href="/early-access">Get Early Access</Link>
//               </Button>
//               <Button size="lg" variant="outline" asChild className="px-8 py-4 rounded-xl shadow-lg">
//                 <Link href="/how-it-works">See How It Works</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }