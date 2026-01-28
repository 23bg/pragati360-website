import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('forms.earlyAccess');
  return generateSeoMetadata({
    title: t('title'),
    description: t('subHeadline'),
  });
}

export default function EarlyAccessPage() {
  const t = useTranslations('forms.earlyAccess');
  const tButton = useTranslations('buttons');

  return (
    <section className="w-full py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('subHeadline')}
        </p>

        <div className="mt-12 max-w-2xl mx-auto text-left p-8 border border-border rounded shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="business-name" className="block text-sm font-medium text-foreground">
                {t('businessName.label')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="business-name"
                name="business-name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-input"
                placeholder={t('businessName.helperText')}
              />
            </div>

            <div>
              <label htmlFor="business-email" className="block text-sm font-medium text-foreground">
                {t('businessEmail.label')} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="business-email"
                name="business-email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-input"
                placeholder={t('businessEmail.helperText')}
              />
            </div>

            <div>
              <label htmlFor="num-outlets" className="block text-sm font-medium text-foreground">
                {t('numOutlets.label')} <span className="text-red-500">*</span>
              </label>
              <select
                id="num-outlets"
                name="num-outlets"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-input"
              >
                <option value="">{t('numOutlets.helperText')}</option>
                <option value="1">{t('numOutlets.option1')}</option>
                <option value="2-5">{t('numOutlets.option2')}</option>
                <option value="6-10">{t('numOutlets.option3')}</option>
                <option value="10+">{t('numOutlets.option4')}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground">
                {t('platformsUsed.label')} <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="platform-gbp"
                    name="platforms"
                    type="checkbox"
                    value="GBP"
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                  />
                  <label htmlFor="platform-gbp" className="ml-3 block text-sm text-muted-foreground">
                    {t('platformsUsed.gbp')}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="platform-instagram"
                    name="platforms"
                    type="checkbox"
                    value="Instagram"
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                  />
                  <label htmlFor="platform-instagram" className="ml-3 block text-sm text-muted-foreground">
                    {t('platformsUsed.instagram')}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="platform-both"
                    name="platforms"
                    type="checkbox"
                    value="Both"
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                  />
                  <label htmlFor="platform-both" className="ml-3 block text-sm text-muted-foreground">
                    {t('platformsUsed.both')}
                  </label>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t('platformsUsed.helperText')}</p>
            </div>

            <div>
              <label htmlFor="whatsapp-number" className="block text-sm font-medium text-foreground">
                {t('whatsappNumber.label')} <span className="text-muted-foreground">{t('whatsappNumber.optional')}</span>
              </label>
              <input
                type="tel"
                id="whatsapp-number"
                name="whatsapp-number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-input"
                placeholder={t('whatsappNumber.helperText')}
              />
            </div>

            <div className="text-center">
              <Button type="submit" size="lg" className="px-8 py-4 rounded shadow-lg">
                {tButton('submitRequest')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
