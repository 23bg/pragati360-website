import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export function PricingPreviewSection() {
  const t = useTranslations('home.pricingPreview');
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('headline')}
        </h2>
        <div className="mt-8">
          <p className="text-5xl font-bold text-foreground">
            {t('startingPrice')}
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            {t('message')}
          </p>
        </div>

        <div className="mt-12">
          <Button size="lg" asChild className="text-base px-8 py-6 rounded shadow-lg">
            <Link href="/pricing">{t('cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
