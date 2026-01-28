/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const SUPPORTED_LOCALES = ['en', 'hi', 'mr', 'ta', 'bn', 'gu', 'te'] as const;

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!SUPPORTED_LOCALES.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages({ locale });

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
