
import { APP_PLATFORMS, SOCIAL_LINKS } from "@/lib/constants";
import { DisplayIcon } from "@/components/ui/display-icon"; // Import from shared UI component


export function TrustSignalsSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Trusted by businesses, built for growth
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Pragati360 integrates seamlessly with the platforms that matter most to your business.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 place-items-center">
          {/* Social Proof */}
          {SOCIAL_LINKS.map((link) => (
            <div key={link.name} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <DisplayIcon icon={link.icon} className="w-8 h-8" />
              </div>
              <p className="text-base font-medium text-foreground">{link.name}</p>
            </div>
          ))}

          {/* Platform Support */}
          {APP_PLATFORMS.map((platform) => (
            <div key={platform.name} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent text-accent-foreground">
                <DisplayIcon icon={platform.icon} className="w-8 h-8" />
              </div>
              <p className="text-base font-medium text-foreground">{platform.name} App</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
