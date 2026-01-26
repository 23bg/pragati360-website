// @ts-ignore

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const SUPPORTED_LOCALES = ['en', 'hi'];

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    if (!SUPPORTED_LOCALES.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
