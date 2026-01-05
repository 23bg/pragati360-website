import { generateMetadata } from "@/lib/seo";
import { SITE_NAME, PRICING_PLANS } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata = generateMetadata({
  title: "Early Access Pricing Philosophy",
  description: "Understand Pragati360's Early Access pricing philosophy. Our commitment to fair, transparent value for trusted partners.",
});

export default function PricingPage() {
  return (
    <section className="w-full py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-foreground">
          Pragati360 Early Access Pricing Philosophy
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          As an Early Access partner, you'll gain access to Pragati360 at a special, transparent rate.
          Our focus is on building a reliable, production-grade platform with trusted partners.
          Your feedback will directly shape our product, and in return, you'll receive foundational pricing
          that reflects our commitment to long-term collaboration. We are not offering
          standard public pricing or checkout at this time.
        </p>

        <div className="mt-12 max-w-2xl mx-auto space-y-8 text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Early Access Partners</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span>**Foundational Rates:** Enjoy special pricing designed to reward our earliest and most dedicated partners.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span>**Transparent Value:** Understand the clear value exchange – your insights for our evolving platform at a preferential rate.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span>**No Surprises:** We believe in clear, upfront communication. All terms will be discussed and agreed upon before partnership.</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8 border-t border-border mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Ready to Partner?</h2>
            <Button size="lg" asChild className="px-8 py-4 rounded-xl shadow-lg">
              <Link href="/early-access">Request Early Access</Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              This will lead to a conversation, not an automated checkout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}