



import { useTranslations } from 'next-intl';

export function TrustSignalsSection() {
  const t = useTranslations('home.trustReinforcement');
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('headline')}
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          {t('body')}
        </p>
      </div>
    </section>
  );
}
