import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PricingPreviewSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Transparent Pricing for Reliable Growth
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Pragati360 offers straightforward pricing tailored for local businesses. Start exploring our platform in Early Access with plans starting from ₹199/month.
        </p>

        <div className="mt-12">
          <p className="text-5xl font-bold text-foreground">
            Plans starting from ₹199/month
          </p>
          <p className="mt-8 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            We believe in clear, honest pricing that supports your business without surprises. During our Early Access phase, we are committed to offering foundational plans that provide essential tools for managing your Google Business Profile and Instagram. Access to Pragati360 during Early Access is not through an immediate checkout process. We're carefully onboarding businesses to ensure a quality experience and gather valuable insights.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            We're building Pragati360 with local businesses in mind, and that includes fair and transparent pricing. There are no hidden fees or complex tiers. During Early Access, we're focused on building relationships and a product that truly serves your needs. Join us to experience a platform that prioritizes reliability over hype.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="text-base px-8 py-6 rounded shadow-lg">
            <Link href="/early-access">Get Early Access</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 rounded shadow-lg">
            <Link href="/how-it-works">See How It Works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
