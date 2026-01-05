import { generateMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic";
import { FEATURE_SECTIONS } from "@/lib/constants";
import { DisplayIcon } from "@/components/ui/display-icon";
import { Check } from "lucide-react";

const feature = FEATURE_SECTIONS.find(
  (f) => f.link === "/features/alerts"
);

export const metadata = generateMetadata({
  title: feature?.title || "Essential Business Alerts",
  description: feature?.description || "",
});

export default function AlertsPage() {
  if (!feature) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-foreground">Feature not found</h1>
        <p className="text-muted-foreground">
          The Smart Alerts & Notifications feature could not be loaded.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 lg:py-8">
      <div className="mb-8 text-center md:text-left">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary">
          <DisplayIcon icon={feature.icon} className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {feature.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          {feature.description}
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
          Key Benefits
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-muted-foreground">
          {feature.details?.map((detail, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
