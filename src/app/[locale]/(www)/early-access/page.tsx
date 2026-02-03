import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { getTranslations } from 'next-intl/server';
import FormClient from '@/components/early-access/FormClient'

export async function generateMetadata() {
  const t = await getTranslations('earlyAccess');
  return generateSeoMetadata({
    title: t('title'),
    description: t('subHeadline'),
  });
}

export default async function EarlyAccessPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('earlyAccess');
  const locale = params?.locale === 'hi' ? 'hi' : 'en'

  const strings = {
    'form.businessName': t('form.businessName'),
    'form.yourName': t('form.yourName'),
    'form.email': t('form.email'),
    'form.phone': t('form.phone'),
    'form.numLocations.label': t('form.numLocations.label'),
    'form.numLocations.option1': t('form.numLocations.option1'),
    'form.numLocations.option2': t('form.numLocations.option2'),
    'form.numLocations.option3': t('form.numLocations.option3'),
    'form.numLocations.option4': t('form.numLocations.option4'),
    'form.currentManagement': t('form.currentManagement'),
    'form.whyInterested': t('form.whyInterested'),
    'form.submitButton': t('form.submitButton'),
    'form.usesGBP': t('form.usesGBP') ?? 'I confirm we manage our Google Business Profile (required)',
    'form.clientValidation': t('form.clientValidation') ?? '',
    'form.success': t('form.success') ?? '',
    'form.submitting': t('form.submitting') ?? '',
  }

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

      {/* What to Expect */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">{t('whatToExpect.headline')}</h2>
        <ul className="space-y-3">
          {['point1', 'point2', 'point3', 'point4'].map((key) => (
            <li key={key} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">{t(`whatToExpect.${key}`)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Who Should Apply */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">{t('whoShouldApply.headline')}</h2>
        <ul className="space-y-3">
          {['point1', 'point2', 'point3', 'point4'].map((key) => (
            <li key={key} className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-muted-foreground">{t(`whoShouldApply.${key}`)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Form */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t('form.headline')}</h2>
        {/* Client form handles JSON POST to /api/early-access */}
        {/* Passing a small map of strings so form stays translated while being a client component */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        {/* Client component */}
        {/* @ts-ignore */}
        <FormClient language={locale} strings={strings} />
      </section>

      {/* After You Apply */}
      <section className="mb-16 bg-secondary p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">{t('afterYouApply.headline')}</h2>
        <ul className="space-y-3">
          {['point1', 'point2', 'point3'].map((key) => (
            <li key={key} className="flex items-start gap-2">
              <span className="text-primary mt-1">→</span>
              <span className="text-muted-foreground">{t(`afterYouApply.${key}`)}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
