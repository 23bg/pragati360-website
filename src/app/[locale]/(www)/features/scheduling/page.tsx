import { Metadata } from "next";
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/display-icon";

export const metadata: Metadata = {
  description: "Pragati360 provides a controlled approach to planning and deploying your content across Instagram and Google Business, ensuring consistent and reliable post scheduling.",
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
    description: "Pragati360 provides a controlled approach to planning and deploying your content across Instagram and Google Business, ensuring consistent and reliable post scheduling.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Post Scheduling | Pragati360",
    description: "Pragati360 provides a controlled approach to planning and deploying your content across Instagram and Google Business, ensuring consistent and reliable post scheduling.",
    images: ["https://pragati360.com/og-image-scheduling.jpg"]
  }
};

export default function SchedulingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Post Scheduling</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Pragati360 offers a reliable approach to planning and deploying your content across Instagram and Google Business, ensuring consistent and controlled post scheduling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded border border-border bg-card hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 mb-4 bg-blue-600 rounded flex items-center justify-center">
              <Icon name="calendar" className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Set Post Times</h3>
            <p className="text-muted-foreground">
              Define precise deployment times for content across platforms, ensuring reliability.
            </p>
          </div>

          <div className="p-6 rounded border border-border bg-card hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 mb-4 bg-blue-600 rounded flex items-center justify-center">
              <Icon name="edit" className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Edit & Reschedule</h3>
            <p className="text-muted-foreground">
              Adjust content and schedule with full control, adapting to your operational needs.
            </p>
          </div>

          <div className="p-6 rounded border border-border bg-card hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 mb-4 bg-blue-600 rounded flex items-center justify-center">
              <Icon name="notification" className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Notifications</h3>
            <p className="text-muted-foreground">
              Receive clear confirmations when content is deployed, maintaining oversight.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-zinc-50 p-8 rounded-2xl border border-blue-100">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ol className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>Prepare or refine your content within the secure dashboard.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>Designate target platforms and precise content deployment times.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>Ensure reliable content deployment at predetermined intervals.</span>
            </li>
          </ol>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild className="px-8 py-4 rounded shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
            <a href="/early-access">Request Early Access</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
