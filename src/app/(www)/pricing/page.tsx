import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
export const dynamic = "force-dynamic";

export const metadata = generateSeoMetadata({
  title: "Pricing",
  description:
    "Capacity-based pricing by outlets, users, alerts, website, lead management, auto-reply and custom domain readiness.",
  ogUrl: "/pricing",
});

const plans = [
  {
    name: "Starter",
    outlets: "1",
    users: "2",
    alertChannels: "Email",
    website: "Basic",
    leadManagement: "Included",
    autoReply: "Rule-based basic",
    customDomain: "No",
  },
  {
    name: "Growth",
    outlets: "Up to 5",
    users: "10",
    alertChannels: "Email + WhatsApp",
    website: "Advanced sections",
    leadManagement: "Included",
    autoReply: "Rule-based expanded",
    customDomain: "Yes",
  },
  {
    name: "Scale",
    outlets: "10+",
    users: "Custom",
    alertChannels: "Multi-channel",
    website: "Custom rollout",
    leadManagement: "Included",
    autoReply: "Rule orchestration",
    customDomain: "Yes",
  },
];

const faqs = [
  {
    question: "What is included in the 14-day trial?",
    answer:
      "Trial includes core monitoring, response workflow, lead tracking, and website capabilities for evaluation.",
  },
  {
    question: "What happens when trial expires?",
    answer:
      "Account enters limited access mode for review and data export prompts until an active paid plan is selected.",
  },
  {
    question: "Can plans change as outlet count grows?",
    answer:
      "Yes, plans are capacity-based and can be upgraded as branches and user roles expand.",
  },
];

export default function PricingPage() {

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <section className="text-center mb-16">
        <h1 className="text-h1 font-bold mb-4">
          Capacity-based pricing for growing outlet networks
        </h1>
        <p className="text-body-lg text-muted-foreground">
          Compare plans by outlets, users, automation depth, and website capabilities.
        </p>
      </section>

      <section className="mb-16 overflow-x-auto rounded-lg border">
        <table className="w-full min-w-[860px] text-left">
          <thead className="bg-muted/40">
            <tr>
              <th className="p-4 font-semibold">Plan</th>
              <th className="p-4 font-semibold">Outlets</th>
              <th className="p-4 font-semibold">Users</th>
              <th className="p-4 font-semibold">Alert channels</th>
              <th className="p-4 font-semibold">Website</th>
              <th className="p-4 font-semibold">Lead management</th>
              <th className="p-4 font-semibold">Auto-reply</th>
              <th className="p-4 font-semibold">Custom domain</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.name} className="border-t">
                <td className="p-4 font-medium">{plan.name}</td>
                <td className="p-4 text-muted-foreground">{plan.outlets}</td>
                <td className="p-4 text-muted-foreground">{plan.users}</td>
                <td className="p-4 text-muted-foreground">{plan.alertChannels}</td>
                <td className="p-4 text-muted-foreground">{plan.website}</td>
                <td className="p-4 text-muted-foreground">{plan.leadManagement}</td>
                <td className="p-4 text-muted-foreground">{plan.autoReply}</td>
                <td className="p-4 text-muted-foreground">{plan.customDomain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-16 rounded-lg border p-6 bg-card">
        <h2 className="text-h3 font-bold mb-3">14-day trial and expiry behavior</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Trial starts at signup and includes core operational modules.</li>
          <li>• Team can evaluate workflows with real data and outlet-level visibility.</li>
          <li>• On expiry, active paid plan is required for continued operational use.</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-h2 font-bold mb-8">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div key={item.question}>
              <h3 className="text-h4 font-semibold mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center pt-8 border-t">
        <Button asChild size="lg">
          <Link href="/signup">Start Free Trial</Link>
        </Button>
      </section>
    </div>
  );
}
