import { useTranslations } from 'next-intl';

export function CoreValueExplanationSection() {
  const t = useTranslations('home.coreValue');
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('headline')}
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          {t('body')}
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground">{t('benefit1.title')}</h3>
            <p className="mt-3 text-base text-muted-foreground">{t('benefit1.description')}</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground">{t('benefit2.title')}</h3>
            <p className="mt-3 text-base text-muted-foreground">{t('benefit2.description')}</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground">{t('benefit3.title')}</h3>
            <p className="mt-3 text-base text-muted-foreground">{t('benefit3.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
