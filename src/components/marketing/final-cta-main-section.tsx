import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTAMainSection() {
  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Join Our Early Access Program
        </h2>
        <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto opacity-90">
          Pragati360 is currently in a focused Early Access phase. This allows us to work closely with local business owners, gather essential feedback, and fine-tune our platform to meet your specific needs. Access is limited and granted in batches to ensure a personalized experience for every participant.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="text-base px-8 py-6 rounded-xl shadow-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/early-access">Get Early Access</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 rounded-xl shadow-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/how-it-works">See How It Works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
