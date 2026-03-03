import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic"; // Keep if dynamic data is still possible, otherwise remove
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';


export async function generateMetadata() {
  const t = await getTranslations('alertsReliability');
  return generateSeoMetadata({
    title: t('headline'),
    description: t('subHeadline'),
  });
}

export default function AlertsPage() {
  const t = useTranslations('alertsReliability');
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
            <h2 className="text-h3 font-bold text-foreground mb-4">{t('alertChannels.title')}</h2>
            <p className="text-body text-muted-foreground">
              {t('alertChannels.body')}
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-bold text-foreground mb-4">{t('severityModel.title')}</h2>
            <p className="text-body text-muted-foreground">
              {t('severityModel.body')}
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-bold text-foreground mb-4">{t('whyAlertsExist.title')}</h2>
            <p className="text-body text-muted-foreground">
              {t('whyAlertsExist.body')}
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-bold text-foreground mb-4">{t('whatsappCarefullyUsed.title')}</h2>
            <p className="text-body text-muted-foreground">
              {t('whatsappCarefullyUsed.body')}
            </p>
          </div>

          <div className="text-center mt-12">
            <Link href="/early-access" className="inline-flex items-center justify-center rounded px-8 py-4 text-base font-medium shadow-lg transition-colors border border-zinc-700 bg-zinc-950 text-zinc-100 hover:bg-zinc-900 dark:border-zinc-300 dark:bg-zinc-200 dark:text-zinc-950 dark:hover:bg-zinc-300">
              {tButton('getEarlyAccess')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
