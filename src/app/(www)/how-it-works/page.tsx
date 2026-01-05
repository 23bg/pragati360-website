import { generateMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "How Pragati360 Early Access Works",
  description: "Learn about the structured process for joining Pragati360's Early Access program and how you can contribute to shaping a reliable operational platform.",
});

const steps = [
  {
    title: "Submit Your Request",
    description: "Complete our brief Early Access request form. This helps us understand your business and ensure Pragati360 is the right fit.",
  },
  {
    title: "Personalized Consultation",
    description: "Our team will reach out for a confidential conversation to discuss your operational needs, answer your questions, and detail the Early Access benefits.",
  },
  {
    title: "Controlled Onboarding",
    description: "Upon acceptance, we'll guide you through a structured onboarding process, ensuring smooth integration and initial setup tailored to your business.",
  },
  {
    title: "Collaborate & Provide Feedback",
  description: "Actively use Pragati360's tools. Your invaluable feedback directly informs our development cycles, shaping features and refining the platform.",
  },
  {
    title: "Benefit from Foundational Partnership",
    description: "As an Early Access partner, you'll receive dedicated support, priority access to new features, and foundational pricing terms.",
  },
];

export default function HowItWorksPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          How Pragati360 Early Access Works
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A structured approach to partnering with us and shaping a reliable operational platform.
        </p>

        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border -z-0"></div>

          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative flex flex-col md:flex-row items-center justify-between py-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-5/12 text-center md:text-left">
                <h2 className="text-2xl font-bold text-foreground">{step.title}</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <div className="z-10 my-6 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground border-4 border-background">
                {/* <Star className="h-6 w-6" /> */} {/* Using Star as temporary icon */}
                {index + 1}
              </div>
              <div className="md:w-5/12">
                {/* Empty div for spacing on the other side */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Begin Your Early Access Journey?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Join a select group of local businesses influencing the development of a production-grade platform.
          </p>
          <Button size="lg" asChild className="mt-8 text-base px-8 py-6 rounded-xl shadow-lg">
            <Link href="/early-access">Request Early Access Invitation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
