import { generateMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = generateMetadata({
  title: "FAQs",
  description: `Find answers to common questions about ${SITE_NAME} and its features.`,
});

const faqs = [
  {
    question: "What is Pragati360?",
    answer:
      "Pragati360 is a single-user business management platform designed to help small to medium-sized businesses manage their Google Business Profile and Instagram scheduling from a single, intuitive dashboard.",
  },
  {
    question: "Is Pragati360 suitable for multi-location businesses?",
    answer:
      "Yes, Pragati360 supports outlet-based content management, allowing you to easily manage multiple business locations and tailor your content for each.",
  },
  {
    question: "What platforms does Pragati360 support?",
    answer:
      "Pragati360 offers a web dashboard, an Android app, and an iOS app, allowing you to manage your business effectively from any device.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer four transparent plans: Starter, Basic, Pro, and Business, starting at just ₹199/month. You can upgrade or downgrade your plan at any time to suit your evolving business needs.",
  },
  {
    question: "Is my data secure with Pragati360?",
    answer:
      "Absolutely. We prioritize your data security with industry-standard encryption, secure infrastructure, regular backups, and strict access controls. Your privacy is paramount.",
  },
  {
    question: "Can I try Pragati360 before subscribing?",
    answer:
      "While we don't offer a free trial at the moment, our Starter plan provides a comprehensive introduction to our features at an affordable price. You can cancel anytime.",
  },
];

export default function FAQPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about Pragati360. Can&apos;t find an answer?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us
          </Link>
          .
        </p>

        <div className="mt-12 max-w-3xl mx-auto text-left">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
