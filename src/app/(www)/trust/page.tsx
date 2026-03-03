import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";

export async function generateMetadata() {
    const t = await getTranslations('trust');
    return generateSeoMetadata({
        title: t('title'),
        description: t('subHeadline'),
    });
}

export default async function TrustPage() {
    const t = await getTranslations('trust');

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            {/* Hero */}
            <section className="text-center mb-16">
                <h1 className="text-h1 font-bold mb-4">
                    {t('headline')}
                </h1>
                <p className="text-body-lg text-muted-foreground">
                    {t('subHeadline')}
                </p>
            </section>

            {/* Our Approach */}
            <section className="mb-16">
                <h2 className="text-h2 font-bold mb-8">{t('approach.headline')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <h3 className="text-h4 font-semibold">{t('approach.noSilentFailures.title')}</h3>
                        <p className="text-muted-foreground">
                            {t('approach.noSilentFailures.description')}
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-h4 font-semibold">{t('approach.humanApproval.title')}</h3>
                        <p className="text-muted-foreground">
                            {t('approach.humanApproval.description')}
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-h4 font-semibold">{t('approach.activityLogs.title')}</h3>
                        <p className="text-muted-foreground">
                            {t('approach.activityLogs.description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Security & Privacy */}
            <section className="mb-16">
                <h2 className="text-h2 font-bold mb-8">{t('security.headline')}</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-h4 font-semibold mb-2">{t('security.googleOAuth.title')}</h3>
                        <p className="text-muted-foreground">{t('security.googleOAuth.description')}</p>
                    </div>
                    <div>
                        <h3 className="text-h4 font-semibold mb-2">{t('security.dataEncryption.title')}</h3>
                        <p className="text-muted-foreground">{t('security.dataEncryption.description')}</p>
                    </div>
                    <div>
                        <h3 className="text-h4 font-semibold mb-2">{t('security.noThirdParty.title')}</h3>
                        <p className="text-muted-foreground">{t('security.noThirdParty.description')}</p>
                    </div>
                    <div>
                        <h3 className="text-h4 font-semibold mb-2">{t('security.compliance.title')}</h3>
                        <p className="text-muted-foreground">{t('security.compliance.description')}</p>
                    </div>
                </div>
            </section>

            {/* Who Builds */}
            <section className="mb-16">
                <h2 className="text-h2 font-bold mb-8">{t('whoBuilds.headline')}</h2>
                <div className="space-y-4 text-muted-foreground">
                    <p>{t('whoBuilds.founderLed')}</p>
                    <p>{t('whoBuilds.builtFor')}</p>
                    <p>{t('whoBuilds.directSupport')}</p>
                    <p>{t('whoBuilds.transparentRoadmap')}</p>
                </div>
            </section>

            {/* What We Don't Do */}
            <section className="mb-16">
                <h2 className="text-h2 font-bold mb-8">{t('whatWeDont.headline')}</h2>
                <ul className="space-y-3 text-muted-foreground">
                    <li>• {t('whatWeDont.noAutoPublish')}</li>
                    <li>• {t('whatWeDont.noAiPosts')}</li>
                    <li>• {t('whatWeDont.noCrossPlatformPromises')}</li>
                    <li>• {t('whatWeDont.noHiddenFees')}</li>
                </ul>
            </section>

            {/* Data & Compliance */}
            <section className="mb-16">
                <h2 className="text-h2 font-bold mb-8">{t('dataCompliance.headline')}</h2>
                <div className="space-y-3 text-muted-foreground">
                    <p>{t('dataCompliance.dataStored')}</p>
                    <p>{t('dataCompliance.googleApiCompliance')}</p>
                    <p className="flex gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            {t('dataCompliance.privacyPolicy')}
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            {t('dataCompliance.termsOfService')}
                        </Link>
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center pt-8 border-t">
                <h2 className="text-h3 font-bold mb-4">{t('cta.headline')}</h2>
                <Button asChild size="lg">
                    <Link href="/early-access">{t('cta.button')}</Link>
                </Button>
            </section>
        </div>
    );
}
