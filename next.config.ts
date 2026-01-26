import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // // Add i18n configuration here
  // i18n: {
  //   locales: ["en", "hi"],
  //   defaultLocale: "en",
  // },
  reactStrictMode: true
};

export default withNextIntl(nextConfig);
