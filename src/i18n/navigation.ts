import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'hi', 'mr', 'ta', 'bn', 'gu', 'te', 'kn'] as const;
export const defaultLocale = 'en';

export const {
    Link,
    redirect,
    usePathname,
    useRouter,
} = createNavigation({
    locales,
    defaultLocale,
});
