import { generateMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // For the CTA

export const metadata = generateMetadata({
  title: "Master Your Google Business Profile with Pragati360",
  description: "Ensure your local business stands out on Google with reliable management of reviews, posts, and essential alerts.",
});

export default function GoogleBusinessPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Master Your Google Business Profile with Pragati360
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Ensure your local business stands out on Google with reliable management of reviews, posts, and essential alerts.
        </p>

        <div className="mt-12 max-w-3xl mx-auto space-y-8 text-left">
          <p className="text-lg text-muted-foreground">
            For local businesses, your Google Business Profile (GBP) is often the first interaction a potential customer has with you. It's not just a listing; it's a dynamic storefront that impacts your visibility and reputation. Pragati360 provides you with the precise tools to manage your GBP, ensuring accuracy and engagement.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Reviews: Build Trust, Respond Thoughtfully</h2>
            <p className="text-lg text-muted-foreground">
              Customer reviews are your social proof. Pragati360 helps you monitor new reviews, ensuring you can respond promptly and professionally. Maintain your brand's reputation by engaging directly with customer feedback, turning positive experiences into powerful endorsements and addressing concerns with care.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Replies: Consistent Engagement, Every Time</h2>
            <p className="text-lg text-muted-foreground">
              Engaging with customers isn't just about reviews. Our platform streamlines your ability to reply to messages and questions on GBP, ensuring consistent communication and showing your customers you're attentive and accessible.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Posts: Keep Your Audience Informed</h2>
            <p className="text-lg text-muted-foreground">
              Use GBP Posts to share updates, offers, and news directly with your local audience. Pragati360 allows you to schedule and publish these posts with confidence, keeping your profile fresh and relevant without daily manual effort.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alerts: Never Miss a Beat</h2>
            <p className="text-lg text-muted-foreground">
              Stay informed of critical changes or interactions on your GBP. Pragati360 delivers timely alerts for new reviews, important messages, or profile updates, ensuring you're always aware and can act quickly. Our alert system is designed for clarity, not noise.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Why GBP Matters for Local Businesses</h2>
            <p className="text-lg text-muted-foreground">
              A well-maintained Google Business Profile is crucial for discoverability and trust. It directly influences your local SEO, drives calls and website visits, and helps customers choose you over competitors. Pragati360 helps you leverage this powerful tool to its fullest potential, ensuring your digital storefront is always optimized and inviting.
            </p>
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
