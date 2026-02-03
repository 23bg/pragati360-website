import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('pricing');
  return generateSeoMetadata({
    title: t('title'),
    description: t('subHeadline'),
  });
}

export default async function PricingPage() {
  const t = await getTranslations('pricing');

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t('headline')}
        </h1>
        <p className="text-xl text-muted-foreground">
          {t('subHeadline')}
        </p>
      </section>

      {/* Pricing Plan */}
      <section className="mb-16">
        <div className="max-w-md mx-auto border-2 border-primary rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-2">{t('plan.name')}</h2>
          <div className="text-center mb-6">
            <p className="text-4xl font-bold text-primary">{t('plan.price')}</p>
          </div>
          <ul className="space-y-3 mb-8">
            {['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'].map((key) => (
              <li key={key} className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>{t(`plan.${key}`)}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="w-full" size="lg">
            <Link href="/early-access">{t('plan.cta')}</Link>
          </Button>
        </div>
      </section>

      {/* How Billing Works */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">{t('howBillingWorks.headline')}</h2>
        <ul className="space-y-3">
          {['point1', 'point2', 'point3', 'point4'].map((key) => (
            <li key={key} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">{t(`howBillingWorks.${key}`)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Multi-Location Pricing */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">{t('multiLocation.headline')}</h2>
        <ul className="space-y-3">
          {['point1', 'point2', 'point3'].map((key) => (
            <li key={key} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">{t(`multiLocation.${key}`)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* What's Included */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">{t('whatsIncluded.headline')}</h2>
        <ul className="space-y-3">
          {['point1', 'point2', 'point3', 'point4'].map((key) => (
            <li key={key} className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-muted-foreground">{t(`whatsIncluded.${key}`)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t('faq.headline')}</h2>
        <div className="space-y-6">
          {['q1', 'q2', 'q3', 'q4'].map((key) => (
            <div key={key}>
              <h3 className="text-xl font-semibold mb-2">{t(`faq.${key}.question`)}</h3>
              <p className="text-muted-foreground">{t(`faq.${key}.answer`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pt-8 border-t">
        <Button asChild size="lg">
          <Link href="/early-access">{t('cta')}</Link>
        </Button>
      </section>
    </div>
  );
}
