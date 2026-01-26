import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, type Locale } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is always a valid string
  const resolvedLocale: Locale =
    locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});
