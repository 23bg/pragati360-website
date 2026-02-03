



import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

export function TrustSignalsSection() {
  const t = useTranslations('home.earlyAccessTransparency');
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('headline')}
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          {t('body')}
        </p>
        <ul className="mt-8 space-y-3 text-left max-w-2xl mx-auto">
          <li className="text-base text-muted-foreground">• {t('benefit1')}</li>
          <li className="text-base text-muted-foreground">• {t('benefit2')}</li>
          <li className="text-base text-muted-foreground">• {t('benefit3')}</li>
        </ul>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/early-access">{t('cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
