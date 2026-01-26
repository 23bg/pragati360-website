import { generateMetadata } from "@/lib/seo";
import Link from "next/link"; // For the CTA

export const metadata = generateMetadata({
  title: "Your Business, Your Data, Your Control.",
  description: "Pragati360 is built on a foundation of trust, security, and transparency, ensuring your peace of mind while managing your online presence.",
});

export default function SecurityPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Your Business, Your Data, Your Control.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Pragati360 is built on a foundation of trust, security, and transparency, ensuring your peace of mind while managing your online presence.
        </p>

        <div className="mt-12 max-w-3xl mx-auto space-y-8 text-left">
          <p className="text-lg text-muted-foreground">
            We understand that entrusting your business's online presence to a platform requires confidence. At Pragati360, security and data ownership are not afterthoughts; they are core principles. We've implemented robust measures to protect your information and ensure you always remain in full control.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">OTP-Based Login: Secure Access, Every Time</h2>
            <p className="text-lg text-muted-foreground">
              Your account security is paramount. Pragati360 utilizes OTP (One-Time Password) based login to ensure that only authorized individuals can access your account, adding an extra layer of protection against unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Merchant-Owned Data: Your Information Stays Yours</h2>
            <p className="text-lg text-muted-foreground">
              Your business data belongs to you, always. We never sell your data, and we provide clear pathways for you to export or delete your information at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">No Silent Failures: Transparency in Operations</h2>
            <p className="text-lg text-muted-foreground">
              We believe in absolute transparency. Pragati360 is engineered to never fail silently. If an action cannot be completed, or if there's an issue with a scheduled post or an alert delivery, you will be explicitly notified. You'll always know the status of your operations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Activity Logs: Clear Records, Full Accountability</h2>
            <p className="text-lg text-muted-foreground">
              Maintain a comprehensive record of all key actions taken within your Pragati360 account. Our detailed activity logs provide an audit trail, ensuring accountability and offering insights into all interactions with your Google Business Profile and Instagram.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cancel Anytime: Flexibility and Freedom</h2>
            <p className="text-lg text-muted-foreground">
              We believe in earning your trust, not locking you in. You have the freedom to cancel your Pragati360 service at any time, with no hidden fees or complicated processes. Your satisfaction and control are our priority.
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
