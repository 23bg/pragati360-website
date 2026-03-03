"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const dynamic = "force-dynamic";

// export const metadata = generateSeoMetadata({
//   title: "Pricing",
//   description:
//     "Capacity-based pricing by outlets and users. Simple scalable plans with yearly savings.",
//   ogUrl: "/pricing",
// });

type Plan = {
  name: string;
  price: number;
  outlets: string;
  users: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: 499,
    outlets: "1 Outlet",
    users: "1 User",
  },
  {
    name: "Growth",
    price: 999,
    outlets: "Up to 5 Outlets",
    users: "Up to 5 Users",
    popular: true,
  },
  {
    name: "Business",
    price: 1999,
    outlets: "Up to 10 Outlets",
    users: "Up to 10 Users",
  },
  {
    name: "Unlimited",
    price: 3999,
    outlets: "Unlimited Outlets",
    users: "Unlimited Users",
  },
];

const faqs = [
  {
    question: "What is included in the 14-day trial?",
    answer:
      "Full platform access including review monitoring, alerts, website, and lead tracking modules.",
  },
  {
    question: "What happens when trial expires?",
    answer:
      "Account moves to limited mode until an active subscription is selected.",
  },
  {
    question: "Is yearly billing discounted?",
    answer:
      "Yes. Yearly billing charges only 10 months (2 months free).",
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  const getPrice = (monthly: number) => {
    if (!yearly) return monthly;
    return monthly * 10;
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">

      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-h1 font-bold mb-4">
          Simple pricing for growing outlet networks
        </h1>
        <p className="text-body-lg text-muted-foreground mb-6">
          Choose a plan based on number of users and outlets.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={!yearly ? "font-semibold" : "text-muted-foreground"}>
            Monthly
          </span>

          <Switch checked={yearly} onCheckedChange={setYearly} />

          <span className={yearly ? "font-semibold" : "text-muted-foreground"}>
            Yearly
          </span>

          {yearly && (
            <span className="text-primary text-sm font-medium">
              2 Months Free
            </span>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {plans.map((plan) => {
          const price = getPrice(plan.price);

          return (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 bg-card flex flex-col ${plan.popular ? "ring-2 ring-primary" : ""
                }`}
            >
              <div className="mb-6">
                <h2 className="text-h3 font-semibold mb-2">{plan.name}</h2>

                <div className="flex items-end gap-2">
                  <span className="text-score font-bold">
                    ₹{price.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-small">
                    {yearly ? "/year" : "/month"}
                  </span>
                </div>

                {yearly && (
                  <p className="text-small text-muted-foreground mt-1">
                    Effective ₹{plan.price}/month
                  </p>
                )}
              </div>

              <div className="space-y-3 text-muted-foreground mb-8">
                <p>{plan.outlets}</p>
                <p>{plan.users}</p>
                <p>Review Monitoring</p>
                <p>Alerts & Escalation</p>
                <p>Public Website</p>
                <p>Lead Management</p>
              </div>

              <Button
                asChild
                className="mt-auto border border-zinc-700 bg-zinc-950 text-zinc-100 hover:bg-zinc-900 dark:border-zinc-300 dark:bg-zinc-200 dark:text-zinc-950 dark:hover:bg-zinc-300"
              >
                <Link href="/signup">Start Free Trial</Link>
              </Button>
            </div>
          );
        })}
      </section>

      {/* Feature Comparison Table */}
      <section className="mb-20 overflow-x-auto rounded-xl border">
        <table className="w-full min-w-[700px] text-left">
          <thead className="bg-muted/40">
            <tr>
              <th className="p-4 font-semibold">Plan</th>
              <th className="p-4 font-semibold">Outlets</th>
              <th className="p-4 font-semibold">Users</th>
              <th className="p-4 font-semibold">Core Modules</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.name} className="border-t">
                <td className="p-4 font-medium">{plan.name}</td>
                <td className="p-4 text-muted-foreground">{plan.outlets}</td>
                <td className="p-4 text-muted-foreground">{plan.users}</td>
                <td className="p-4 text-muted-foreground">
                  Reviews, Alerts, Website, Leads
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-h2 font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((item) => (
            <div key={item.question}>
              <h3 className="text-h4 font-semibold mb-2">
                {item.question}
              </h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center pt-10 border-t">
        <h3 className="text-h3 font-semibold mb-4">
          Start with a 14-day free trial
        </h3>
        <Button
          asChild
          size="lg"
          className="border border-zinc-700 bg-zinc-950 text-zinc-100 hover:bg-zinc-900 dark:border-zinc-300 dark:bg-zinc-200 dark:text-zinc-950 dark:hover:bg-zinc-300"
        >
          <Link href="/signup">Get Started</Link>
        </Button>
      </section>
    </div>
  );
}