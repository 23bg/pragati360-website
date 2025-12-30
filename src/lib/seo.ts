import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
}

export const generateMetadata = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  ogUrl,
}: SEOProps): Metadata => {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: ogType,
      url: ogUrl || "/", // Default to root if not provided
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
};
