import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Link } from '@/i18n/navigation'; // For the CTA
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('trustSecurity');
  return generateSeoMetadata({
    title: t('headline'),
    description: t('subHeadline'),
  });
}

export default function SecurityPage() {
  const t = useTranslations('trustSecurity');
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
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('otpLogin.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('otpLogin.body')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('merchantOwnedData.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('merchantOwnedData.body')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('noSilentFailures.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('noSilentFailures.body')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('activityLogs.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('activityLogs.body')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('cancelAnytime.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('cancelAnytime.body')}
            </p>
          </div>

          <div className="text-center mt-12">
            <Link href="/early-access" className="inline-flex items-center justify-center rounded bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90">
              {tButton('getEarlyAccess')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
