import { FEATURE_SECTIONS } from "@/lib/constants";
import { DisplayIcon } from "@/components/ui/display-icon"; // Added import

export function CoreCapabilitiesSection() {
  // Filter for the specific capabilities needed for the home page cards
  const coreCapabilities = FEATURE_SECTIONS.filter(section =>
    ["Google Business Profile Management", "Instagram Post Scheduling", "Smart Alerts & Notifications", "Unified Dashboard", "Outlet Management"].includes(section.title)
  );

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Core Capabilities to Drive Your Business
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Pragati360 empowers you with the tools you need to manage and grow your online presence effectively.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreCapabilities.map((feature) => ( // Use coreCapabilities
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border"
            >
              <div className="text-center">
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary">
                  <DisplayIcon icon={feature.icon} className="h-8 w-8" /> {/* Uncommented and used */}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
