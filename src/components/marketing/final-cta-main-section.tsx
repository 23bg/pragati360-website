import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export function FinalCTAMainSection() {
  const t = useTranslations('home.earlyAccessExplanation');
  const tButton = useTranslations('buttons');
  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {t('headline')}
        </h2>
        <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto opacity-90">
          {t('body')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="text-base px-8 py-6 rounded shadow-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/early-access">{tButton('getEarlyAccess')}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 rounded shadow-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/how-it-works">{tButton('seeHowItWorks')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
