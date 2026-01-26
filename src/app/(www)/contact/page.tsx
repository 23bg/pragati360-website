import { generateMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Connect with Pragati360",
  description: "Whether you have questions about partnerships or need support, we're here to help.",
});

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Connect with Pragati360
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We value clear communication and are ready to assist you. Please choose the appropriate contact method below.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Sales & Partnerships */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Sales & Partnerships
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Interested in a strategic partnership or have questions about how Pragati360 can specifically benefit a larger network of local businesses? Our team is available to discuss collaboration opportunities.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Email:</strong> <a href="mailto:partnerships@pragati360.com" className="hover:text-primary transition-colors">partnerships@pragati360.com</a>
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Phone:</strong> +91-987-654-3210 (Mon-Fri, 9 AM - 5 PM IST)
            </p>
          </div>

          {/* Product Access & Early Access Inquiries */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Product Access & Early Access Inquiries
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              For all inquiries related to gaining access to Pragati360, including questions about our features or the Early Access program, please utilize our dedicated Early Access request process. This ensures your request is routed efficiently and we can provide you with the most relevant information.
            </p>
            <div className="mt-8 text-center md:text-left">
              <Button size="lg" asChild className="px-8 py-4 rounded-xl shadow-lg">
                <Link href="/early-access">Get Early Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
