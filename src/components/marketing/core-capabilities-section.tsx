import { useTranslations } from 'next-intl';

export function CoreValueExplanationSection() {
  const tWhatWeDo = useTranslations('home.whatWeDo');
  const tBuiltFor = useTranslations('home.builtForControl');
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* What We Do */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {tWhatWeDo('headline')}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground">{tWhatWeDo('publishPosts.title')}</h3>
              <p className="mt-3 text-base text-muted-foreground">{tWhatWeDo('publishPosts.description')}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground">{tWhatWeDo('manageReviews.title')}</h3>
              <p className="mt-3 text-base text-muted-foreground">{tWhatWeDo('manageReviews.description')}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground">{tWhatWeDo('updateInfo.title')}</h3>
              <p className="mt-3 text-base text-muted-foreground">{tWhatWeDo('updateInfo.description')}</p>
            </div>
          </div>
        </div>

        {/* Built for Control */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {tBuiltFor('headline')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{tBuiltFor('message')}</p>
          <ul className="mt-8 space-y-3 text-left max-w-2xl mx-auto">
            <li className="text-base text-muted-foreground">• {tBuiltFor('point1')}</li>
            <li className="text-base text-muted-foreground">• {tBuiltFor('point2')}</li>
            <li className="text-base text-muted-foreground">• {tBuiltFor('point3')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
