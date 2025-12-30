import { generateMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_DESCRIPTION, FEATURE_SECTIONS } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata = generateMetadata({
  title: "Features",
  description: SITE_DESCRIPTION,
});

interface FeaturesLayoutProps {
  children: React.ReactNode;
}

export default function FeaturesLayout({ children }: FeaturesLayoutProps) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
        <div className="py-6 pr-6 lg:py-8">
          <h4 className="mb-4 px-4 text-lg font-semibold tracking-tight">Features</h4>
          <nav className="flex flex-col space-y-1">
            {FEATURE_SECTIONS.map((section) => (
              <Link
                key={section.link}
                href={section.link}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start hover:text-primary"
                )}
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      <main className="relative py-6 lg:py-8">{children}</main>
    </div>
  );
}
