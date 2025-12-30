import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ProductIcon } from "@/components/ui/display-icon";

export const metadata: Metadata = {
  title: "Google Business Profile Management | Pragati360",
  description: "Manage your Google Business Profile with Pragati360 — from posting, reviews, to analytics — all in one place.",
  applicationName: "Pragati360",
  metadataBase: new URL("https://pragati360.com"),
  keywords: [
    "Google Business Profile",
    "Google Business Management",
    "Google Business Profile tools",
    "Small business tools",
    "India",
    "SaaS",
    "Marketing"
  ],
  openGraph: {
    title: "Google Business Profile Management | Pragati360",
    description: "Manage your Google Business Profile with Pragati360 — from posting, reviews, to analytics — all in one place.",
    url: "https://pragati360.com/features/google-business",
    siteName: "Pragati360",
    images: [
      {
        url: "https://pragati360.com/og-image-google-business.jpg",
        width: 1200,
        height: 630,
        alt: "Google Business Profile Management with Pragati360"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Business Profile Management | Pragati360",
    description: "Manage your Google Business Profile with Pragati360 — from posting, reviews, to analytics — all in one place.",
    images: ["https://pragati360.com/og-image-google-business.jpg"]
  }
};

export default function GoogleBusinessPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <ProductIcon icon="google-business" className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">
          Google Business Profile Management
        </h1>
        <p className="text-lg leading-8 text-muted-foreground mb-8">
          Pragati360 helps you manage your Google Business Profile with full control over posts, reviews, and visibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Post Content</h3>
              <p className="text-muted-foreground">
                Schedule posts and manage content calendar for your Google Business Profile.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Review Management</h3>
              <p className="text-muted-foreground">
                Monitor, respond to, and track customer reviews in real time.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Analytics & Insights</h3>
              <p className="text-muted-foreground">
                Get performance metrics, reach, engagement, and traffic insights.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-xl border border-border shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-6">Why Use Pragati360?</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <span>Automate posting without manual effort</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <span>Respond to reviews instantly with templates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <span>Track performance and optimize content strategy</span>
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
