import { generateMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { Lock, ShieldCheck, Fingerprint, Cloud, Scale } from "lucide-react";
import { DisplayIcon } from "@/components/ui/display-icon";

export const metadata = generateMetadata({
  title: "Security & Trust",
  description: `Learn about ${SITE_NAME}'s commitment to your data security and privacy.`,
});

const securityFeatures = [
  {
    icon: "Lock",
    title: "Data Encryption",
    description:
      "All your data is encrypted at rest and in transit using industry-standard protocols, ensuring maximum security.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure Infrastructure",
    description:
      "We build on robust, secure cloud infrastructure with continuous monitoring and regular security audits.",
  },
  {
    icon: "Fingerprint",
    title: "Access Control",
    description:
      "Strict access controls and authentication mechanisms are in place to protect your account from unauthorized access.",
  },
  {
    icon: "Cloud",
    title: "Regular Backups",
    description:
      "Your data is regularly backed up to ensure business continuity and quick recovery in unforeseen events.",
  },
  {
    icon: "Scale",
    title: "Privacy by Design",
    description:
      "We adhere to strict privacy principles and comply with relevant data protection regulations to safeguard your information.",
  },
];

export default function SecurityPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Your Trust, Our Priority
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          At {SITE_NAME}, we are committed to protecting your data and ensuring your privacy with robust security measures.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-soft border border-border flex flex-col items-center text-center"
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary">
                <DisplayIcon icon={feature.icon as IconKeys} className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                {feature.title}
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
