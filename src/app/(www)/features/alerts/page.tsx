import { generateMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic"; // Keep if dynamic data is still possible, otherwise remove
import Link from "next/link"; // For the CTA

export const metadata = generateMetadata({
  title: "Alerts & Reliability",
  description: "Pragati360's reliable alert system keeps you informed of critical events across your online presence, ensuring timely action and peace of mind.",
});

export default function AlertsPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Stay Informed, Always in Control.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Pragati360's reliable alert system keeps you informed of critical events across your online presence, ensuring timely action and peace of mind.
        </p>

        <div className="mt-12 max-w-3xl mx-auto space-y-8 text-left">
          <p className="text-lg text-muted-foreground">
            In the fast-paced world of local business, staying on top of your online presence is crucial. Pragati360's alert system is designed to provide you with clear, actionable notifications when it matters most, without overwhelming you with noise. Our focus is on reliability, ensuring you never miss a critical update or interaction.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alert Channels: Timely Notifications, Your Way</h2>
            <p className="text-lg text-muted-foreground">
              Receive alerts through channels that suit your workflow. Pragati360 delivers notifications for events on your Google Business Profile and Instagram Business profile, ensuring you're always aware of new reviews, messages, or publishing statuses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Severity Model: Focus on What's Urgent</h2>
            <p className="text-lg text-muted-foreground">
              Not all alerts are created equal. Our system categorizes notifications based on their importance, helping you quickly identify and prioritize critical issues that require your immediate attention versus routine updates. This ensures you can focus your efforts effectively.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Alerts Exist: Your Digital Watchdog</h2>
            <p className="text-lg text-muted-foreground">
              Alerts are your safeguard. They exist to bring important events to your attention, enabling you to maintain an active and responsive online presence. From new customer feedback to successful content delivery, our alerts ensure you're always in the loop.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Why WhatsApp is Used Carefully: Respecting Your Privacy</h2>
            <p className="text-lg text-muted-foreground">
              While we understand the convenience of WhatsApp, Pragati360 uses it for alerts with extreme care and only for specific, opted-in notifications. We prioritize your privacy and aim to avoid interrupting your personal communications. Our use of WhatsApp is always intentional, transparent, and user-controlled, adhering strictly to our "reliability over automation" principle.
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
