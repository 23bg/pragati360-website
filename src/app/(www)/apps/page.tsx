import { generateMetadata } from "@/lib/seo";
import { SITE_NAME, APP_PLATFORMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DisplayIcon } from "@/components/ui/display-icon";

export const metadata = generateMetadata({
  title: "Apps",
  description: `Access ${SITE_NAME} on Web, Android, and iOS devices. Manage your business on the go.`,
});

export default function AppsPage() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Access Pragati360 Anywhere
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your business management platform is available across all your devices.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {APP_PLATFORMS.map((platform) => (
            <div
              key={platform.name}
              className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-soft border border-border flex flex-col items-center justify-center text-center"
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 text-primary">
                <DisplayIcon icon={platform.icon} className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                {platform.name} App
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Manage your business seamlessly on our dedicated {platform.name} platform.
              </p>
              <div className="mt-6">
                {platform.name === "Web" ? (
                  <Button asChild className="rounded-xl shadow-lg">
                    <Link href="/">Launch Web App</Link>
                  </Button>
                ) : (
                  <Button asChild variant="outline" className="rounded-xl shadow-lg">
                    <Link href="#" className="pointer-events-none opacity-50">
                      Download on {platform.name === "Android" ? "Google Play" : "App Store"}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          *App downloads are currently mock links. Full functionality coming soon.
        </p>
      </div>
    </section>
  );
}
