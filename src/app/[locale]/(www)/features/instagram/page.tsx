import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
// import { Check } from "lucide-react"; // No longer needed directly in JSX

export async function generateMetadata() {
  const t = await getTranslations('instagram');
  return generateSeoMetadata({
    title: t('headline'),
    description: t('subHeadline'),
  });
}

export default function InstagramPage() {
  const t = useTranslations('instagram');
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
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('businessPosting.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('businessPosting.body')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('scheduling.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('scheduling.body')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('statusVisibility.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('statusVisibility.body')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('limitations.title')}</h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t('limitations.body')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
              <li>{t.rich('limitations.dm', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
              <li>{t.rich('limitations.storiesReels', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
              <li>{t.rich('limitations.automatedEngagement', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
              <li>{t.rich('limitations.spamMessaging', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="inline-flex items-center justify-center rounded bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90">
              <Link href="/early-access">{tButton('getEarlyAccess')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
