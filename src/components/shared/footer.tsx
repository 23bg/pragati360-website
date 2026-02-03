"use client";

import { SITE_NAME } from "@/lib/constants";
import { Globe } from "lucide-react";
import Image from "next/image";
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { Button } from "../ui/button";

// Phase-1: Only English and Hindi
const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
] as const;

export function Footer() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <footer className="border-t border-t-zinc-500 bg-zinc-900 text-white">
      <div className="container mx-auto py-10 px-4">

        {/* Top section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/pragati360-512x512.png"
                alt={`${SITE_NAME} logo`}
                width={24}
                height={24}
                priority
              />
              <span className="text-xl font-semibold tracking-tight">
                {SITE_NAME}
              </span>
            </Link>

            <p className="text-sm text-muted-foreground">
              Manage your Google Business Profile with control.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-semibold">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/how-it-works", label: "How It Works" },
                { href: "/pricing", label: "Pricing" },
                { href: "/trust", label: "Trust" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Language */}
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-semibold">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Language</h4>
              <div className="flex gap-2">
                {LANGUAGES.map((lang) => (
                  <Link
                    key={lang.code}
                    href={pathname}
                    locale={lang.code}
                  >
                    <Button
                      variant={locale === lang.code ? "default" : "outline"}
                      size="sm"
                      className="gap-1"
                    >
                      <Globe className="h-3 w-3" />
                      {lang.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_NAME}. Early Access.
        </div>
      </div>
    </footer>
  );
}

