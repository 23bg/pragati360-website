import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('productOverview');
  return generateSeoMetadata({
    title: t('headline'),
    description: t('subHeadline'),
  });
}

export default function ProductOverviewPage() {
  const t = useTranslations('productOverview');
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
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t('keyPrinciplesHeadline')}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
              <li>{t.rich('keyPrinciple1', {
                bold: (chunks) => <strong>{chunks}</strong>
              })}</li>
              <li>{t.rich('keyPrinciple2', {
                bold: (chunks) => <strong>{chunks}</strong>
              })}</li>
              <li>{t.rich('keyPrinciple3', {
                bold: (chunks) => <strong>{chunks}</strong>
              })}</li>
            </ul>
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
