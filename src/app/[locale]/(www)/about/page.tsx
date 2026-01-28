import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export const dynamic = "force-dynamic";

export default function AboutUsPage() {
    const t = useTranslations('aboutUs');
    const tButton = useTranslations('buttons');
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">{t('headline')}</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-8">
                    {t('subHeadline')}
                </p>
            </div>

            <div className="container mx-auto px-4 mt-12 max-w-3xl">
                <p className="text-muted-foreground mb-8 text-lg leading-8">
                    {t('body')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('whyExists.title')}</h2>
                <p className="text-muted-foreground mb-8 text-lg leading-8">
                    {t('whyExists.body')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('whoBuiltFor.title')}</h2>
                <p className="text-muted-foreground mb-8 text-lg leading-8">
                    {t('whoBuiltFor.body')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('whatAvoids.title')}</h2>
                <ul className="list-disc list-inside text-muted-foreground text-lg leading-8 mb-8">
                    <li>{t.rich('whatAvoids.aiAutomation', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                    <li>{t.rich('whatAvoids.growthHackTactics', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                    <li>{t.rich('whatAvoids.overPromising', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                    <li>{t.rich('whatAvoids.complexIntelligence', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                </ul>

                <div className="text-center mt-12">
                    <Link href="/early-access" className="inline-flex items-center justify-center rounded bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90">
                        {tButton('getEarlyAccess')}
                    </Link>
                </div>
            </div>
        </div>
    );
}
