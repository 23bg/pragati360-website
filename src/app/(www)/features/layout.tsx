import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Features",
  description: "Review monitoring, escalation, auto-reply, posting, website, lead tracking, and multi-outlet comparison.",
});

interface FeaturesLayoutProps {
  children: React.ReactNode;
}

export default function FeaturesLayout({ children }: FeaturesLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <main>{children}</main>
    </div>
  );
}
