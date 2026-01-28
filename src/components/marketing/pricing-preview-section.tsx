import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export function PricingPreviewSection() {
  const t = useTranslations('pricing');
  const tButton = useTranslations('buttons');
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('headline')}
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          {t('subHeadline')}
        </p>

        <div className="mt-12">
          <p className="text-5xl font-bold text-foreground">
            {t('startingPrice')}
          </p>
          <p className="mt-8 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            {t('body1')}
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            {t('body2')}
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="text-base px-8 py-6 rounded shadow-lg">
            <Link href="/early-access">{tButton('getEarlyAccess')}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 rounded shadow-lg">
            <Link href="/how-it-works">{tButton('seeHowItWorks')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
