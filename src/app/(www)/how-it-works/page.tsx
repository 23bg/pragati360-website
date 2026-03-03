import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('howItWorks');
  return generateSeoMetadata({
    title: t('title'),
    description: t('subHeadline'),
  });
}

export default async function HowItWorksPage() {
  const t = await getTranslations('howItWorks');

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-h1 font-bold mb-4">
          {t('headline')}
        </h1>
        <p className="text-body-lg text-muted-foreground">
          {t('subHeadline')}
        </p>
      </section>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-h2 font-bold mb-6">{t('overview.headline')}</h2>
        <p className="text-body text-muted-foreground">{t('overview.body')}</p>
      </section>

      {/* Step-by-Step */}
      <section className="mb-16">
        <h2 className="text-h2 font-bold mb-8">{t('steps.headline')}</h2>
        <div className="space-y-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {num}
              </div>
              <div>
                <h3 className="text-h4 font-semibold mb-2">{t(`steps.step${num}.title`)}</h3>
                <p className="text-muted-foreground">{t(`steps.step${num}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-16">
        <h2 className="text-h2 font-bold mb-6">{t('whatsIncluded.headline')}</h2>
        <ul className="space-y-3">
          {['feature1', 'feature2', 'feature3', 'feature4', 'feature5'].map((key) => (
            <li key={key} className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-muted-foreground">{t(`whatsIncluded.${key}`)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* What's NOT Included Yet */}
      <section className="mb-16 bg-secondary p-8 rounded-lg">
        <h2 className="text-h2 font-bold mb-6">{t('whatsNotIncluded.headline')}</h2>
        <ul className="space-y-3 mb-4">
          {['feature1', 'feature2', 'feature3', 'feature4'].map((key) => (
            <li key={key} className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">→</span>
              <span className="text-muted-foreground">{t(`whatsNotIncluded.${key}`)}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm italic text-muted-foreground">{t('whatsNotIncluded.message')}</p>
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
