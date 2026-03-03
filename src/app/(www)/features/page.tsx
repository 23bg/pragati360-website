import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export const dynamic = "force-dynamic";

export const metadata = generateSeoMetadata({
    title: "Features",
    description:
        "Structured feature view of review monitoring, escalation, auto-reply, posting, website builder, lead management, and multi-outlet comparison.",
    ogUrl: "/features",
});

const featureBlocks = [
    {
        name: "Review Monitoring",
        functionalExplanation:
            "Track incoming reviews in one place with outlet-level visibility and trend context for accountability.",
        screenshot: "Dashboard review stream",
        limitations: "No public competitor benchmarking in V1.",
    },
    {
        name: "Review Alerts & Escalation",
        functionalExplanation:
            "Trigger role-based alerts for rating drops and unresolved high-risk reviews to reduce delayed response.",
        screenshot: "Escalation rules and alert channels",
        limitations: "Alert channel configurations are plan-based.",
    },
    {
        name: "Auto-Reply (Rule-Based)",
        functionalExplanation:
            "Use predefined templates for faster acknowledgements based on rating or response scenarios.",
        screenshot: "Rule and template settings",
        limitations: "No sentiment-AI generation in V1.",
    },
    {
        name: "Google Post Scheduling",
        functionalExplanation:
            "Plan and schedule update posts to maintain local profile freshness across branches.",
        screenshot: "Scheduled post calendar",
        limitations: "No social media multi-network scheduling in V1.",
    },
    {
        name: "Public Website Builder",
        functionalExplanation:
            "Launch a simple public-facing site for trust and enquiry capture linked to your business operations.",
        screenshot: "Website section builder",
        limitations: "Advanced custom theming is out of scope for V1.",
    },
    {
        name: "Lead Management",
        functionalExplanation:
            "Capture enquiries and track response discipline to avoid slow-lead leakage in daily operations.",
        screenshot: "Lead queue and SLA panel",
        limitations: "No outbound campaign engine in V1.",
    },
    {
        name: "Multi-Outlet Comparison",
        functionalExplanation:
            "Compare outlet performance on rating, response behavior, and risk to prioritize interventions.",
        screenshot: "Outlet comparison summary",
        limitations: "No automatic competitor feed in V1.",
    },
];

export default function FeaturesPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <section className="text-center mb-12">
                <h1 className="text-h1 font-bold mb-4">Features built for operational control</h1>
                <p className="text-body text-muted-foreground max-w-3xl mx-auto">
                    Pragati360 focuses on reputation control, lead discipline, and multi-outlet visibility for Indian SMB teams.
                </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                {featureBlocks.map((feature) => (
                    <article key={feature.name} className="rounded-lg border p-6 bg-card">
                        <h2 className="text-h4 font-semibold mb-3">{feature.name}</h2>
                        <p className="text-muted-foreground mb-4">{feature.functionalExplanation}</p>

                        <div className="rounded-md border bg-background p-4 mb-4">
                            <p className="text-sm font-medium">Screenshot</p>
                            <p className="text-sm text-muted-foreground">{feature.screenshot}</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium">V1 Limitation</p>
                            <p className="text-sm text-muted-foreground">{feature.limitations}</p>
                        </div>
                    </article>
                ))}
            </section>

            <section className="text-center mt-12 pt-8 border-t">
                <Button asChild size="lg">
                    <Link href="/signup">Start Free Trial</Link>
                </Button>
            </section>
        </div>
    );
}
