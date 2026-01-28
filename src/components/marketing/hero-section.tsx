import { Link } from '@/i18n/navigation';
import { Button } from "../ui/button";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('home.hero');
  const tButton = useTranslations('buttons');
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">


      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              {t('headline')}
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto lg:mx-0">
              {t('subHeadline')}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" asChild className="px-8 py-6 rounded">
                <Link href="/early-access">{tButton('getEarlyAccess')}</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="px-8 py-6 rounded"
              >
                <Link href="/how-it-works">{tButton('seeHowItWorks')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
