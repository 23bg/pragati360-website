import { generateMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // For the CTA
import { Check } from "lucide-react"; // For checkmarks in lists

export const metadata = generateMetadata({
  title: "Cultivate Your Brand on Instagram, Reliably.",
  description: "Pragati360 helps local businesses maintain a consistent, professional Instagram presence with scheduled posts and clear status visibility.",
});

export default function InstagramPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Cultivate Your Brand on Instagram, Reliably.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Pragati360 helps local businesses maintain a consistent, professional Instagram presence with scheduled posts and clear status visibility.
        </p>

        <div className="mt-12 max-w-3xl mx-auto space-y-8 text-left">
          <p className="text-lg text-muted-foreground">
            Instagram is a powerful visual platform for local businesses to connect with their community and showcase their brand. Pragati360 empowers you to manage your Instagram Business profile effectively, ensuring your content strategy is consistent and your online presence always reflects your best.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Business Posting: Plan & Publish with Precision</h2>
            <p className="text-lg text-muted-foreground">
              Maintain a vibrant Instagram feed with ease. Pragati360 allows you to plan your content and schedule posts for your Instagram Business profile. Ensure your brand story is consistently told, without the daily scramble.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Scheduling: Consistency Made Simple</h2>
            <p className="text-lg text-muted-foreground">
              Organize your content calendar and schedule posts in advance. Our intuitive scheduling features help you achieve a steady, engaging presence on Instagram, building anticipation and keeping your audience connected.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Status Visibility: Know When Your Content Goes Live</h2>
            <p className="text-lg text-muted-foreground">
              Gain clear visibility into the status of your scheduled posts. Pragati360 provides updates on content delivery, so you always know when your messages have successfully reached your audience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Clear Limitations: What Pragati360 Does NOT Do for Instagram</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Pragati360 focuses on reliable content publishing for your Instagram Business profile. To maintain a trust-first approach and respect the platform's guidelines, we intentionally do NOT support:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
              <li><strong>Direct Messages (DMs):</strong> We do not access or manage your private messages.</li>
              <li><strong>Stories or Reels:</strong> Our focus is on feed posts for consistent brand messaging.</li>
              <li><strong>Automated Engagement:</strong> We do not automate likes, comments, or follows. Your engagement remains authentic and human-driven.</li>
              <li><strong>Spam or Mass Messaging:</strong> Pragati360 is built for genuine, deliberate content sharing, not growth-hacking tactics.</li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <Link href="/early-access" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90">
                Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
