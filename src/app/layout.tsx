import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { ThemeProvider } from "@/components/shared/theme-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "Pragati360",
    "Business Management",
    "Google Business Profile",
    "Instagram Scheduling",
    "Outlet Management",
    "SaaS",
    "India",
    "Marketing",
    "Small Business",
  ],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`, // Assuming an OpenGraph image will be placed here
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: "en_IN", // Indian locale
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`], // Assuming an OpenGraph image will be placed here
  },
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`min-h-screen bg-background font-sans antialiased ${dmSans.variable}`}>
        <ThemeProvider>

          <main>{children}</main>
        </ThemeProvider>

      </body>
    </html>
  );
}
