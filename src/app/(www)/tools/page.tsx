import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export const metadata = generateSeoMetadata({
    title: "Free Tools",
    description:
        "Five structured free tools for review response, reputation score, lead response risk, Google optimization checklist, and multi-outlet comparison.",
    ogUrl: "/tools",
});

const tools = [
    {
        href: "/tools/google-review-reply-generator",
        title: "Google Review Reply Generator",
        description: "Generate structured responses by rating, industry, and tone.",
        tags: ["Reputation", "Google Reviews", "Service SMB"],
    },
    {
        href: "/tools/reputation-health-score",
        title: "Reputation Health Score Calculator",
        description: "Calculate weighted score and risk based on reviews and response behavior.",
        tags: ["Reputation", "Operations", "Multi-outlet"],
    },
    {
        href: "/tools/lead-response-risk-calculator",
        title: "Lead Response Time Risk Calculator",
        description: "Estimate conversion and revenue leakage from delayed enquiry responses.",
        tags: ["Lead Management", "Revenue", "SLA"],
    },
    {
        href: "/tools/google-optimization-checklist",
        title: "Google Business Optimization Checklist",
        description: "Score profile readiness with weighted manual checklist inputs.",
        tags: ["Google Business", "Checklist", "Local SEO"],
    },
    {
        href: "/tools/multi-outlet-comparison",
        title: "Multi-Outlet Comparison Score",
        description: "Compare branch-level rating and response variance to identify risk outlet.",
        tags: ["Multi-outlet", "Branch Ops", "Risk"],
    },
];

export default function ToolsHubPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            <section className="text-center mb-12">
                <h1 className="text-h1 font-bold mb-4">Free Tools for SMB reputation and lead control</h1>
                <p className="text-body text-muted-foreground max-w-3xl mx-auto">
                    Use high-intent practical calculators and templates built for Indian SMB operations.
                </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                {tools.map((tool) => (
                    <article key={tool.href} className="rounded-lg border p-6 bg-card">
                        <h2 className="text-h4 font-semibold mb-2">{tool.title}</h2>
                        <p className="text-muted-foreground mb-4">{tool.description}</p>

                        <div className="flex flex-wrap gap-2 mb-5">
                            {tool.tags.map((tag) => (
                                <span key={tag} className="text-xs rounded border px-2 py-1 text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Button asChild variant="outline">
                            <Link href={tool.href}>Open Tool</Link>
                        </Button>
                    </article>
                ))}
            </section>

            <section className="text-center mt-12 pt-8 border-t">
                <h2 className="text-2xl font-semibold mb-3">Need full monitoring and automation?</h2>
                <p className="text-muted-foreground mb-4">Get alerts, tracking, and discipline workflows in one place.</p>
                <Button asChild size="lg">
                    <Link href="/signup">Get Full Monitoring with Pragati360</Link>
                </Button>
            </section>
        </div>
    );
}
