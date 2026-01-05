import { generateMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { Lock, ShieldCheck, Fingerprint, Cloud, Scale } from "lucide-react";
import { DisplayIcon } from "@/components/ui/display-icon";
import type { IconKeys } from "@/components/icons";

export const metadata = generateMetadata({
  title: "Pragati360's Commitment to Trust & Security",
  description: "Discover Pragati360's unwavering commitment to robust security, data integrity, and your absolute privacy. Building trust through reliable protection.",
});

const securityFeatures = [
  {
    icon: "Lock",
    title: "Data Encryption",
    description:
      "Your sensitive data is protected with industry-standard encryption, both at rest and in transit, ensuring its confidentiality and integrity.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure Infrastructure",
    description:
      "Our platform is built upon a resilient, secure cloud infrastructure, fortified by continuous monitoring and rigorous security audits.",
  },
  {
    icon: "Fingerprint",
    title: "Access Control",
    description:
      "Rigorous access controls and multi-factor authentication safeguard your account, preventing unauthorized access and maintaining operational integrity.",
  },
  {
    icon: "Cloud",
    title: "Regular Backups",
    description:
      "Comprehensive and regular data backups ensure your business continuity and rapid recovery from any unforeseen data event.",
  },
  {
    icon: "Scale",
    title: "Privacy by Design",
    description:
      "Our systems are engineered with privacy at their core, adhering to stringent data protection principles and regulatory compliance.",
  },
];

export default function SecurityPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Our Unwavering Commitment: Trust & Security at Pragati360
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          At Pragati360, we build and operate with an absolute commitment to safeguarding your business data and maintaining the highest standards of privacy.
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
