import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata = generateMetadata({
  title: "Request Early Access to Pragati360",
  description: "Join Pragati360's Early Access program for local businesses. Experience reliable, production-grade tools and help shape the future of business operations.",
});

export default function EarlyAccessPage() {
  return (
    <section className="w-full py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground">
          Request Early Access to Pragati360
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Pragati360 is currently operating in a controlled Early Access mode. We are
          selectively partnering with local businesses to ensure a stable, reliable,
          and production-grade experience from day one. This allows us to
          collaborate closely and integrate feedback, building a platform truly
          designed for your operational needs.
        </p>

        <div className="mt-12 max-w-2xl mx-auto space-y-8 text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Join Early Access?</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span>**Direct Impact:** Your insights will directly influence the development roadmap, ensuring features meet real-world business needs.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span>**Foundational Partnership:** Establish a long-term relationship with a committed team, benefiting from early support and preferential terms.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span>**Exclusive Access:** Be among the first to utilize Pragati360's robust tools for Google Business Profile, Instagram, and essential alerts.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span>**Dedicated Support:** Receive personalized attention and priority assistance from our engineering and product teams.</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8 border-t border-border mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Ready to Shape the Future of Your Operations?</h2>
            <Button size="lg" asChild className="px-8 py-4 rounded-xl shadow-lg">
              <Link href="/contact">Request Early Access</Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              This will initiate a conversation with our team to discuss your needs and how Pragati360 can best serve you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
