import { CoreValueExplanationSection } from "@/components/marketing/core-capabilities-section";
import { FinalCTAMainSection } from "@/components/marketing/final-cta-main-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { PricingPreviewSection } from "@/components/marketing/pricing-preview-section";
import { TrustSignalsSection } from "@/components/marketing/trust-signals-section";
import { SITE_DESCRIPTION } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Home",
  description: SITE_DESCRIPTION,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSignalsSection />
      <CoreValueExplanationSection />
      <PricingPreviewSection />
      <FinalCTAMainSection />
    </>
  );
}
