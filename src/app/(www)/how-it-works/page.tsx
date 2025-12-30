import { generateMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "How It Works",
  description: `Understand the simple process of how ${SITE_NAME} streamlines your business management.`,
});

const steps = [
  {
    title: "Connect Your Accounts",
    description:
      "Securely link your Google Business Profile and Instagram accounts in minutes. Our platform ensures data privacy and seamless integration.",
    icon: "plug", // Placeholder icon
  },
  {
    title: "Schedule Your Content",
    description:
      "Plan and schedule posts for both platforms from a single intuitive calendar. Create engaging content with our built-in tools.",
    icon: "calendar", // Placeholder icon
  },
  {
    title: "Manage Your Outlets",
    description:
      "If you have multiple business locations, easily manage and tailor content for each outlet from one central dashboard.",
    icon: "store", // Placeholder icon
  },
  {
    title: "Receive Smart Alerts",
    description:
      "Stay informed with real-time notifications for new reviews, messages, and critical business updates, ensuring you never miss a beat.",
    icon: "bell", // Placeholder icon
  },
  {
    title: "Gain Insights & Grow",
    description:
      "Access a unified dashboard with performance analytics to understand your reach, engagement, and optimize your strategy for continuous growth.",
    icon: "chart-line", // Placeholder icon
  },
];

export default function HowItWorksPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          How Pragati360 Works
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Simplifying your business management in a few easy steps.
        </p>

        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border -z-0"></div>

          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative flex flex-col md:flex-row items-center justify-between py-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-5/12 text-center md:text-left">
                <h2 className="text-2xl font-bold text-foreground">{step.title}</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <div className="z-10 my-6 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground border-4 border-background">
                {/* <Star className="h-6 w-6" /> */} {/* Using Star as temporary icon */}
                {index + 1}
              </div>
              <div className="md:w-5/12">
                {/* Empty div for spacing on the other side */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Experience the ease of managing your online presence with Pragati360 today.
          </p>
          <Button size="lg" asChild className="mt-8 text-base px-8 py-6 rounded-xl shadow-lg">
            <Link href="/pricing">Start Your Free Trial</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
