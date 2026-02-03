import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('contact');
  return generateSeoMetadata({
    title: t('title'),
    description: t('subHeadline'),
  });
}

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t('headline')}
        </h1>
        <p className="text-xl text-muted-foreground">
          {t('subHeadline')}
        </p>
      </section>

      {/* Contact Options */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">{t('contactOptions.headline')}</h2>
        <div className="space-y-4 text-lg">
          <p className="text-muted-foreground">{t('contactOptions.email')}</p>
          <p className="text-muted-foreground">{t('contactOptions.earlyAccess')}</p>
          <p className="text-muted-foreground">{t('contactOptions.support')}</p>
        </div>
      </section>

      {/* Response Time */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">{t('responseTime.headline')}</h2>
        <ul className="space-y-3">
          <li className="text-muted-foreground">• {t('responseTime.earlyAccessRequests')}</li>
          <li className="text-muted-foreground">• {t('responseTime.supportInquiries')}</li>
          <li className="text-muted-foreground">• {t('responseTime.generalQuestions')}</li>
        </ul>
      </section>
    </div>
  );
}
