import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('contact');
  return generateSeoMetadata({
    title: t('headline'),
    description: t('subHeadline'),
  });
}

export default function ContactPage() {
  const t = useTranslations('contact');
  const tButton = useTranslations('buttons');

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          {t('headline')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('subHeadline')}
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Sales & Partnerships */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t('salesPartnerships.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t('salesPartnerships.body')}
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>{t('salesPartnerships.emailLabel')}</strong> <a href="mailto:partnerships@pragati360.com" className="hover:text-primary transition-colors">partnerships@pragati360.com</a>
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>{t('salesPartnerships.phoneLabel')}</strong> {t('salesPartnerships.phone')}
            </p>
          </div>

          {/* Product Access & Early Access Inquiries */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t('productAccess.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t('productAccess.body')}
            </p>
            <div className="mt-8 text-center md:text-left">
              <Button size="lg" asChild className="px-8 py-4 rounded shadow-lg">
                <Link href="/early-access">{tButton('getEarlyAccess')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
