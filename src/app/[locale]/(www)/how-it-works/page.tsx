import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
// import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants"; // No longer needed
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';


export async function generateMetadata() {
  const t = await getTranslations('howEarlyAccessWorks');
  return generateSeoMetadata({
    title: t('headline'),
    description: t('subHeadline'),
  });
}

// The steps array can be moved inside the component if it needs to be dynamic,
// or translated directly in the JSX as shown below.
// For now, let's keep it here and translate within the JSX.

export default function HowItWorksPage() {
  const t = useTranslations('howEarlyAccessWorks');
  const tButton = useTranslations('buttons');
  const steps = [
    {
      titleKey: "step1.title",
      descriptionKey: "step1.description",
    },
    {
      titleKey: "step2.title",
      descriptionKey: "step2.description",
    },
    {
      titleKey: "step3.title",
      descriptionKey: "step3.description",
    },
    {
      titleKey: "step4.title",
      descriptionKey: "step4.description",
    },
    {
      titleKey: "step5.title",
      descriptionKey: "step5.description",
    },
  ];


  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          {t('headline')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('subHeadline')}
        </p>

        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border -z-0"></div>

          {steps.map((step, index) => (
            <div
              key={step.titleKey}
              className={`relative flex flex-col md:flex-row items-center justify-between py-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              <div className="md:w-5/12 text-center md:text-left">
                <h2 className="text-2xl font-bold text-foreground">{t(step.titleKey)}</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  {t(step.descriptionKey)}
                </p>
              </div>
              <div className="z-10 my-6 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground border-4 border-background">
                {/* <Star className="h-6 w-6" /> */} {/* Using Star as temporary icon */}
                {index + 1}
              </div>
              <div className="md:w-5/12">
                {/* Empty div for spacing on the other side */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('ctaHeadline')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            {t('ctaBody')}
          </p>
          <Button size="lg" asChild className="mt-8 text-base px-8 py-6 rounded shadow-lg">
            <Link href="/early-access">{t('ctaButton')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
