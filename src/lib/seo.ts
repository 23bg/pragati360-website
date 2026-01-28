import type { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  locale?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogUrl?: string;
}

/**
 * SEO metadata helper for App Router + i18n
 */
export function generateMetadata({
  title,
  description,
  keywords,
  locale = 'en',
  ogImage,
  ogType = 'website',
  ogUrl,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pragati360.com';

  const url = ogUrl
    ? `${baseUrl}/${locale}${ogUrl}`
    : `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      type: ogType,
      url,
      locale,
      images: ogImage
        ? [
          {
            url: ogImage.startsWith('http')
              ? ogImage
              : `${baseUrl}${ogImage}`,
            width: 1200,
            height: 630,
            alt: title,
          },
        ]
        : [],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage
        ? [
          ogImage.startsWith('http')
            ? ogImage
            : `${baseUrl}${ogImage}`,
        ]
        : [],
    },
  };
}
