import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata = generateSeoMetadata({
  title: "Contact",
  description: "Contact Pragati360 through email, WhatsApp, or support form.",
  ogUrl: "/contact",
});

export default function ContactPage() {

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <section className="text-center mb-16">
        <h1 className="text-h1 font-bold mb-4">
          Contact Pragati360
        </h1>
        <p className="text-body-lg text-muted-foreground">
          Reach our team for onboarding, support, and operational guidance.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="rounded-lg border p-6 bg-card">
          <h2 className="text-2xl font-semibold mb-4">Contact options</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>Email: support@pragati360.com</li>
            <li>
              WhatsApp: <a className="underline" href="https://wa.me/919999999999" target="_blank" rel="noreferrer">+91 99999 99999</a>
            </li>
            <li>Business hours support for onboarding and account queries</li>
          </ul>
        </div>

        <form className="rounded-lg border p-6 bg-card space-y-4">
          <h2 className="text-2xl font-semibold">Support form</h2>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@business.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us what you need help with" rows={4} />
          </div>
          <Button type="button" className="w-full">Submit</Button>
        </form>
      </section>
    </div>
  );
}
