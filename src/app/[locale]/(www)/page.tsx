import { CoreValueExplanationSection } from "@/components/marketing/core-capabilities-section";
import { FinalCTAMainSection } from "@/components/marketing/final-cta-main-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { PricingPreviewSection } from "@/components/marketing/pricing-preview-section";
import { TrustSignalsSection } from "@/components/marketing/trust-signals-section";
// import { SITE_DESCRIPTION } from "@/lib/constants"; // No longer needed
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('home');
  return generateSeoMetadata({
    title: t('title'),
    description: t('hero.subHeadline'), // Using hero.subHeadline as the general description for the home page
  });
}

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
