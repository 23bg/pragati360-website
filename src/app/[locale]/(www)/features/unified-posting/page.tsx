import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('unifiedPosting');
  return generateSeoMetadata({
    title: t('headline'),
    description: t('subHeadline'),
  });
}

export default function UnifiedPostingPage() {
  const t = useTranslations('unifiedPosting');
  const tButton = useTranslations('buttons');
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          {t('headline')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('subHeadline')}
        </p>

        <div className="mt-12 max-w-3xl mx-auto space-y-8 text-left">
          <p className="text-lg text-muted-foreground">
            {t('body')}
          </p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('multiplePlatforms.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('multiplePlatforms.body')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('independentSuccessFailure.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('independentSuccessFailure.body')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('noSilentPartialSuccess.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('noSilentPartialSuccess.body')}
            </p>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="px-8 py-4 rounded shadow-lg">
              <Link href="/early-access">{tButton('getEarlyAccess')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
