import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/display-icon";

export const metadata: Metadata = {
  title: "Post Scheduling | Prag-than360",
  description: "Schedule your Instagram and Google Business posts with Pragati360 — from content planning to automated posting.",
  applicationName: "Pragati360",
  metadataBase: new URL("https://pragati360.com"),
  keywords: [
    "post scheduling",
    "content scheduling",
    "Instagram scheduling",
    "Google Business scheduling",
    "small business tools",
    "India",
    "SaaS",
    "marketing"
  ],
  openGraph: {
    title: "Post Scheduling | Pragati360",
    description: "Schedule your Instagram and Google Business posts with Pragati360 — from content planning to automated posting.",
    url: "https://pragati360.com/features/scheduling",
    siteName: "Pragati360",
    images: [
      {
        url: "https://pragati360.com/og-image-scheduling.jpg",
        width: 1200,
        height: 630,
        alt: "Post Scheduling on Pragati360"
      }
    ]
  }
};

export default function SchedulingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Post Scheduling</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule your Instagram and Google Business posts with Pragati360 — from content planning to automated posting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 mb-4 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="calendar" className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Set Post Times</h3>
            <p className="text-muted-foreground">
              Choose exact times to post your content across all platforms — no more guessing when to post.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 mb-4 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="edit" className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Edit & Reschedule</h3>
            <p className="text-muted-foreground">
              Modify your posts or reschedule them at any time — no need to manually re-post.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 mb-4 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="notification" className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Notifications</h3>
            <p className="text-muted-foreground">
              Receive alerts when posts go live or when engagement spikes — stay in control.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-zinc-50 p-8 rounded-2xl border border-blue-100">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ol className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>Create or edit your content in the dashboard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>Select the platforms and schedule post times</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>Post content automatically at scheduled times</span>
            </li>
          </ol>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild className="px-8 py-4 rounded-xl shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
            <a href="/pricing">Start at ₹199/month</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
