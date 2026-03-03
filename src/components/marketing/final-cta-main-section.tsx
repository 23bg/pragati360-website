import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export function FinalCTAMainSection() {
  const t = useTranslations('home.finalCta');
  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {t('headline')}
        </h2>
        <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto opacity-90">
          {t('subText')}
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="text-base px-8 py-6 rounded shadow-lg border border-zinc-700 bg-zinc-950 text-zinc-100 hover:bg-zinc-900 dark:border-zinc-300 dark:bg-zinc-200 dark:text-zinc-950 dark:hover:bg-zinc-300">
            <Link href="/early-access">{t('cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
