import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/display-icon";

export const metadata: Metadata = {
  title: "Instagram Post Scheduling | Pragati360",
  description: "Schedule and manage Instagram posts with Pragati360 — from content planning to analytics — all in one place.",
  applicationName: "Pragati360",
  metadataBase: new URL("https://pragati360.com"),
  keywords: [
    "Instagram scheduling",
    "Instagram post scheduling",
    "Instagram management",
    "Small business tools",
    "India",
    "SaaS",
    "Marketing"
  ],
  openGraph: {
    title: "Instagram Post Scheduling | Pragati360",
    description: "Schedule and manage Instagram posts with Pragati360 — from content planning to analytics — all in one place.",
    url: "https://pragati360.com/features/instagram",
    siteName: "Pragati360",
    images: [
      {
        url: "https://pragati360.com/og-image-instagram.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Post Scheduling with Pragati360"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Post Scheduling | Pragati360",
    description: "Schedule and manage Instagram posts with Pragati360 — from content planning to analytics — all in one place.",
    images: ["https://pragati360.com/og-image-instagram.jpg"]
  }
};

export default function InstagramPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <Icon icon="instagram" className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">
          Instagram Post Scheduling
        </h1>
        <p className="text-lg leading-8 text-muted-foreground mb-8">
          Pragati360 helps you plan, schedule, and manage your Instagram content with full control over posting timelines and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Schedule Posts</h3>
              <p className="text-muted-foreground">
                Plan your content calendar and schedule posts in advance to maintain consistency.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Content Planning</h3>
              <p className="text-muted-foreground">
                Create content ideas, draft posts, and organize them in a reusable content library.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Performance Analytics</h3>
              <p className="text-muted-foreground">
                Track engagement, reach, and performance to refine your content strategy over time.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-xl border border-border shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-6">Why Use Pragati360?</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <span>Plan and schedule posts without manual effort</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <span>Visualize content performance and adjust strategy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <span>Save time with reusable content templates</span>
            </li>
          </ul>
          <div className="mt-8">
            <Button size="lg" asChild className="px-8 py-4 rounded-xl shadow-lg">
              <a href="/pricing">Start at ₹199/month</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
