import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('googleBusiness');
  return generateSeoMetadata({
    title: t('headline'),
    description: t('subHeadline'),
  });
}

export default function GoogleBusinessPage() {
  const t = useTranslations('googleBusiness');
  const tButton = useTranslations('buttons');
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-h1 font-bold tracking-tight text-foreground">
          {t('headline')}
        </h1>
        <p className="mt-4 text-body text-muted-foreground max-w-3xl mx-auto">
          {t('subHeadline')}
        </p>

        <div className="mt-12 max-w-3xl mx-auto space-y-8 text-left">
          <p className="text-body text-muted-foreground">
            {t('body')}
          </p>

          <div>
            <h2 className="text-h3 font-bold text-foreground mb-4">{t('reviews.title')}</h2>
            <p className="text-body text-muted-foreground">
              {t('reviews.body')}
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-bold text-foreground mb-4">{t('replies.title')}</h2>
            <p className="text-body text-muted-foreground">
              {t('replies.body')}
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-bold text-foreground mb-4">{t('posts.title')}</h2>
            <p className="text-body text-muted-foreground">
              {t('posts.body')}
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-bold text-foreground mb-4">{t('alerts.title')}</h2>
            <p className="text-body text-muted-foreground">
              {t('alerts.body')}
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-bold text-foreground mb-4">{t('whyMatters.title')}</h2>
            <p className="text-body text-muted-foreground">
              {t('whyMatters.body')}
            </p>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="inline-flex items-center justify-center rounded px-8 py-4 text-base font-medium shadow-lg transition-colors border border-zinc-700 bg-zinc-950 text-zinc-100 hover:bg-zinc-900 dark:border-zinc-300 dark:bg-zinc-200 dark:text-zinc-950 dark:hover:bg-zinc-300">
              <Link href="/early-access">{tButton('getEarlyAccess')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
