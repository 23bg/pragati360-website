import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('pricing');
  return generateSeoMetadata({
    title: t('headline'),
    description: t('subHeadline'),
  });
}

const PRICING_PLANS_KEYS = [
  {
    nameKey: "plans.starter.name",
    price: "₹199",
    descriptionKey: "plans.starter.description",
    featuresKeys: [
      "plans.starter.features.0",
      "plans.starter.features.1",
      "plans.starter.features.2",
    ],
  },
  {
    nameKey: "plans.growth.name",
    price: "₹399",
    descriptionKey: "plans.growth.description",
    featuresKeys: [
      "plans.growth.features.0",
      "plans.growth.features.1",
      "plans.growth.features.2",
    ],
    highlighted: true,
  },
  {
    nameKey: "plans.pro.name",
    price: "₹699",
    descriptionKey: "plans.pro.description",
    featuresKeys: [
      "plans.pro.features.0",
      "plans.pro.features.1",
      "plans.pro.features.2",
    ],
  },
  {
    nameKey: "plans.scale.name",
    price: "₹999",
    descriptionKey: "plans.scale.description",
    featuresKeys: [
      "plans.scale.features.0",
      "plans.scale.features.1",
      "plans.scale.features.2",
    ],
  },
];

export default function PricingPage() {
  const t = useTranslations('pricing');
  const tButton = useTranslations('buttons');
  return (
    <section className="w-full py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          {t('headline')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('subHeadline')}
        </p>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS_KEYS.map((plan) => (
            <div
              key={plan.nameKey}
              className={[
                "relative flex flex-col rounded border bg-card p-6 shadow-sm transition",
                plan.highlighted
                  ? "border-primary shadow-lg scale-[1.02]"
                  : "border-border",
              ].join(" ")}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  {t('mostPopular')}
                </span>
              )}

              <h3 className="font-heading text-xl font-semibold text-foreground">
                {t(plan.nameKey)}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t(plan.descriptionKey)}
              </p>

              <div className="mt-6 text-4xl font-bold text-foreground">
                {plan.price}
                <span className="text-base font-normal text-muted-foreground">
                  /month
                </span>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {plan.featuresKeys.map((featureKey) => (
                  <li key={featureKey}>• {t(featureKey)}</li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="mt-auto rounded"
                variant={plan.highlighted ? "default" : "outline"}
              >
                <Link href="/early-access">{tButton('getEarlyAccess')}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-20 max-w-3xl mx-auto space-y-6 text-left">
          <h2 className="text-2xl font-bold text-foreground">
            {t('philosophy.headline')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('philosophy.body1')}
          </p>
          <p className="text-lg text-muted-foreground">
            {t('philosophy.body2')}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-border pt-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {t('ctaHeadline')}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="px-8 py-4 rounded">
              <Link href="/early-access">{tButton('getEarlyAccess')}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-8 py-4 rounded"
            >
              <Link href="/how-it-works">{tButton('seeHowItWorks')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
