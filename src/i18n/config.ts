export const locales = ["en", "hi", "mr", "ta", "bn", "gu", "te", "kn"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
