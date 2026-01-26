import { generateMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Request Early Access to Pragati360",
  description: "Join our exclusive Early Access program and help us shape the future of growth operations for local businesses.",
});

export default function EarlyAccessPage() {
  return (
    <section className="w-full py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground">
          Request Early Access to Pragati360
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Join our exclusive Early Access program and help us shape the future of growth operations for local businesses.
        </p>

        <div className="mt-12 max-w-2xl mx-auto text-left p-8 border border-border rounded-xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="business-name" className="block text-sm font-medium text-foreground">
                Business Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="business-name"
                name="business-name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-input"
                placeholder="As registered with your Google Business Profile (if applicable)."
              />
            </div>

            <div>
              <label htmlFor="business-email" className="block text-sm font-medium text-foreground">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="business-email"
                name="business-email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-input"
                placeholder="We'll use this to communicate about your Early Access application."
              />
            </div>

            <div>
              <label htmlFor="num-outlets" className="block text-sm font-medium text-foreground">
                Number of Business Locations <span className="text-red-500">*</span>
              </label>
              <select
                id="num-outlets"
                name="num-outlets"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-input"
              >
                <option value="">How many physical locations does your business operate?</option>
                <option value="1">1</option>
                <option value="2-5">2-5</option>
                <option value="6-10">6-10</option>
                <option value="10+">10+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground">
                Which platforms are important for your business? <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="platform-gbp"
                    name="platforms"
                    type="checkbox"
                    value="GBP"
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                  />
                  <label htmlFor="platform-gbp" className="ml-3 block text-sm text-muted-foreground">
                    Google Business Profile (GBP)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="platform-instagram"
                    name="platforms"
                    type="checkbox"
                    value="Instagram"
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                  />
                  <label htmlFor="platform-instagram" className="ml-3 block text-sm text-muted-foreground">
                    Instagram Business
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="platform-both"
                    name="platforms"
                    type="checkbox"
                    value="Both"
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                  />
                  <label htmlFor="platform-both" className="ml-3 block text-sm text-muted-foreground">
                    Both GBP & Instagram
                  </label>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Select all that apply to your current online strategy.</p>
            </div>

            <div>
              <label htmlFor="whatsapp-number" className="block text-sm font-medium text-foreground">
                WhatsApp Number <span className="text-muted-foreground">(Optional)</span>
              </label>
              <input
                type="tel"
                id="whatsapp-number"
                name="whatsapp-number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-input"
                placeholder="Provide a WhatsApp number if you'd like to receive important updates or direct support communications via WhatsApp."
              />
            </div>

            <div className="text-center">
              <Button type="submit" size="lg" className="px-8 py-4 rounded-xl shadow-lg">
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
