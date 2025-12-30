import { generateMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = generateMetadata({
  title: "Contact Us",
  description: `Get in touch with ${SITE_NAME} for support, sales, or general inquiries.`,
});

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We&apos;d love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Our Contact Information
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <a href="mailto:support@pragati360.com" className="hover:text-primary transition-colors">
                    support@pragati360.com
                  </a>
                  <p className="text-sm">We aim to respond within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <a href="tel:+919999999999" className="hover:text-primary transition-colors">
                    +91 99999 99999
                  </a>
                  <p className="text-sm">Mon-Fri, 9 AM - 6 PM IST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Our Office</h3>
                  <p>123 Business Street,</p>
                  <p>Pune, Maharashtra, India - 411001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Display Only) */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input id="name" placeholder="Your Name" className="w-full rounded-xl shadow-sm border border-border px-3 py-2" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input id="email" type="email" placeholder="Your Email" className="w-full rounded-xl shadow-sm border border-border px-3 py-2" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea id="message" placeholder="Your Message" rows={5} className="w-full rounded-xl shadow-sm border border-border px-3 py-2" />
              </div>
              <Button type="submit" className="w-full rounded-xl shadow-lg">
                Send Message
              </Button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              *This form is for display purposes only and does not submit data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
