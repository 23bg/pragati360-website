import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Brain, Shield, UserCheck } from "lucide-react"; // Importing Lucide icons

export const metadata = generateMetadata({
  title: "Responsible AI Assist for Your Business Operations",
  description: "Discover how Pragati360's AI Assist responsibly supports your business operations, enhancing reliability and precision without replacing human oversight.",
});

export default function AIAssistPage() {
  return (
    <section className="w-full py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground">
          Responsible AI Assist for Controlled Operations
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Pragati360's AI Assist is designed not to automate away human oversight,
          but to responsibly support your critical business operations. Our AI
          capabilities are carefully implemented to enhance precision, consistency,
          and reliability, always with a focus on accountability and control.
        </p>

        <div className="mt-12 max-w-2xl mx-auto space-y-8 text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">How Our AI Assist Enhances Your Operations</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-2">
                <Brain className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span>**Contextual Suggestions:** Receive intelligent, context-aware suggestions for post content or review responses, aiding efficiency without dictating.</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span>**Anomaly Detection:** Our AI proactively identifies unusual activity or potential issues across your connected profiles, alerting you for timely intervention.</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span>**Content Compliance Check:** AI Assist helps ensure your content aligns with platform guidelines and your brand's established tone, reducing compliance risks.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span>**Reliability & Precision:** AI-driven insights are presented clearly, supporting your decisions with data-backed precision, never replacing your judgment.</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8 border-t border-border mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Experience Controlled AI Support</h2>
            <Button size="lg" asChild className="px-8 py-4 rounded-xl shadow-lg">
              <Link href="/early-access">Request Early Access</Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Our AI is a tool for enhanced control, not a replacement for human expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
