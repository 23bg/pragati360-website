import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = generateMetadata({
  title: "Pragati360: Essential Operations for Local Business Growth",
  description: "Gain reliable control over your online presence with a platform designed for clarity, consistency, and your peace of mind.",
});

export default function ProductOverviewPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Pragati360: Essential Operations for Local Business Growth
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Gain reliable control over your online presence with a platform designed for clarity, consistency, and your peace of mind.
        </p>

        <div className="mt-12 max-w-3xl mx-auto space-y-8 text-left">
          <p className="text-lg text-muted-foreground">
            Pragati360 is a dedicated growth operations platform built specifically for local businesses. We provide the tools you need to effectively manage and optimize your presence on critical platforms: Google Business Profile and Instagram. Our focus is on empowering you with reliability and visibility, ensuring that your online footprint accurately reflects your business.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Key Principles:</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
              <li><strong>Focused Control.</strong> We believe in providing you with the direct ability to manage your key online channels. No complex dashboards, just clear actions.</li>
              <li><strong>Data You Can Trust.</strong> See what matters. We deliver information that helps you make informed decisions about your online interactions.</li>
              <li><strong>Your Brand, Always.</strong> Every post, every reply, every update is initiated and approved by you, ensuring your voice remains authentic.</li>
            </ul>
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
