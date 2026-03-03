import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('home');
  return generateSeoMetadata({
    title: t('title'),
    description: t('hero.subHeadline'), // Using hero.subHeadline as the general description for the home page
  });
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 space-y-16">
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-h1 font-bold tracking-tight">
          Control your Google reviews and enquiries from one place
        </h1>
        <p className="text-body text-muted-foreground">
          Multi-outlet alerts, lead tracking, and a simple website for Indian SMB teams.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/signup">Start Free Trial</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/tools">Explore Free Tools</Link>
          </Button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-h2 font-semibold mb-4">The problem we solve</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Negative reviews go unanswered and hurt local trust.",
            "Enquiries get delayed, causing silent revenue leakage.",
            "Multi-outlet teams miss visibility across branches.",
          ].map((item) => (
            <div key={item} className="rounded-lg border p-4 bg-card">
              <p className="text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-h2 font-semibold mb-6">How it works in 3 steps</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Connect", body: "Connect your Google Business Profile and basic business setup." },
            { title: "Monitor", body: "Track reviews and enquiries with structured alerts and discipline." },
            { title: "Improve", body: "Use guided actions to protect ratings, response times, and outlet performance." },
          ].map((step, index) => (
            <div key={step.title} className="rounded-lg border p-5">
              <p className="text-sm text-primary font-medium mb-2">Step {index + 1}</p>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-h2 font-semibold mb-6">Feature highlights</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Review monitoring and response workflows",
            "Rule-based alerts and escalation",
            "Lead management with response discipline",
            "Google post scheduling",
            "Public website builder",
            "Multi-outlet comparison",
          ].map((feature) => (
            <div key={feature} className="rounded-lg border p-4 bg-card">
              <p>{feature}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="outline">
            <Link href="/features">View All Features</Link>
          </Button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto rounded-xl border p-6 md:p-8 bg-card">
        <h2 className="text-2xl md:text-h2 font-semibold mb-3">Pricing preview</h2>
        <p className="text-muted-foreground mb-4">
          Capacity-based plans by outlets, users, and automation depth.
        </p>
        <Button asChild>
          <Link href="/pricing">See Pricing Details</Link>
        </Button>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-h2 font-semibold mb-6">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What does the free trial include?",
              a: "The trial includes core review monitoring, lead tracking, and website essentials for 14 days.",
            },
            {
              q: "Can I use Pragati360 for multiple outlets?",
              a: "Yes, plans are capacity-based and include multi-outlet visibility and comparison.",
            },
            {
              q: "Do free tools require Google API connection?",
              a: "No. V1 tools are manual-input and compute results directly without API dependency.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">{item.q}</h3>
              <p className="text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
