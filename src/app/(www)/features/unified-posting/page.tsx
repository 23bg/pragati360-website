import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = generateMetadata({
  title: "Unified Posting",
  description: "Streamline your content strategy by publishing to Google Business Profile and Instagram from a single, controlled workflow.",
});

export default function UnifiedPostingPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Post Once, Publish Where It Matters.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Streamline your content strategy by publishing to Google Business Profile and Instagram from a single, controlled workflow.
        </p>

        <div className="mt-12 max-w-3xl mx-auto space-y-8 text-left">
          <p className="text-lg text-muted-foreground">
            Managing multiple online profiles can be time-consuming. Pragati360 simplifies your content distribution by allowing you to create a single post and publish it to both your Google Business Profile and Instagram Business profile. This ensures consistent messaging across your most critical local channels.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">One Post → Multiple Platforms: Efficiency with Control</h2>
            <p className="text-lg text-muted-foreground">
              Craft your message once and select the platforms where it needs to go. Pragati360 handles the distribution, saving you time and ensuring your updates reach your audience on both Google and Instagram. You maintain full control over the content and publishing schedule for each platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Independent Success/Failure: Clear Outcomes</h2>
            <p className="text-lg text-muted-foreground">
              We believe in transparency. When you initiate a unified post, Pragati360 will process the delivery to each platform independently. This means if a post succeeds on Google Business Profile but encounters an issue on Instagram, you will be clearly notified about the status of each.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">No Silent Partial Success: Always Informed</h2>
            <p className="text-lg text-muted-foreground">
              You will never be left guessing. Pragati360 provides explicit feedback on the outcome for every platform you selected. There's no such thing as a "silent partial success"—you'll know precisely where your content has been successfully published and where it requires your attention.
            </p>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="px-8 py-4 rounded-xl shadow-lg">
                <Link href="/early-access">Get Early Access</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
