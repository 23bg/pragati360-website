import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export const metadata = generateSeoMetadata({
  title: "Security & Data Handling",
  description:
    "OAuth security, org-level isolation, no data resale policy, backup frequency, region clarity, and abuse prevention for Pragati360.",
  ogUrl: "/security",
});

export default function SecurityPage() {
  const controls = [
    {
      title: "OAuth token encryption at rest",
      body: "Google OAuth tokens are encrypted before storage and never exposed in plain text in normal operations.",
    },
    {
      title: "Multi-tenant isolation by orgId",
      body: "Operational data is isolated by organization identifier to prevent cross-tenant visibility and access leakage.",
    },
    {
      title: "No data resale policy",
      body: "Customer operational and lead data is not resold. Usage is limited to service delivery, reliability, and support obligations.",
    },
    {
      title: "Backup frequency",
      body: "Regular backups are scheduled to reduce recovery risk and protect continuity of critical review and lead records.",
    },
    {
      title: "Infrastructure region",
      body: "Primary infrastructure region and hosting choices are documented for customer due diligence and trust transparency.",
    },
    {
      title: "Rate limiting and abuse prevention",
      body: "API and form endpoints are protected with request controls to reduce spam, misuse, and brute-force risk.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-h1 font-bold mb-4">Security & Data Handling</h1>
      <p className="text-body text-muted-foreground mb-10">
        Pragati360 handles reputation and lead operations with structured controls suitable for Indian SMB teams using Google OAuth and WhatsApp alerts.
      </p>

      <div className="space-y-6">
        {controls.map((item) => (
          <article key={item.title} className="rounded-lg border p-5 bg-card">
            <h2 className="text-h4 font-semibold mb-2">{item.title}</h2>
            <p className="text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild size="lg">
          <Link href="/signup">Start Free Trial</Link>
        </Button>
      </div>
    </section>
  );
}
