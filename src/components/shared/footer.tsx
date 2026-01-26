import { SITE_NAME } from "@/lib/constants";
import { Linkedin, Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  return (
    <footer className="border-t border-t-zinc-500 bg-zinc-900 text-white">
      <div className="container mx-auto py-10 px-4">

        {/* Top section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

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
              Reliable operations for local businesses.
              <br />
              Currently in Early Access.
            </p>
          </div>

          {/* Quick Links – Part 1 */}
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/product-overview", label: "Product Overview" },
                { href: "/how-it-works", label: "How Early Access Works" },
                { href: "/business", label: "Business" },
                { href: "/pricing", label: "Pricing" },
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

          {/* Quick Links – Part 2 */}
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-semibold ">
              Supports
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/security", label: "Trust & Security" },
                { href: "/terms", label: "Terms & Conditions" },
                { href: "/faq", label: "FAQs" },
                { href: "/about", label: "About" },
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

          {/* Contact + Social */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">
              Contact & Social
            </h3>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                Email:&nbsp;
                <a
                  href="mailto:info@pragati360.com"
                  className="hover:text-primary transition-colors"
                >
                  info@pragati360.com
                </a>
              </p>
              <p>Phone: +91&nbsp;123&nbsp;456&nbsp;7890</p>
            </div>

            <nav
              aria-label="Social links"
              className="flex items-center gap-4 pt-2"
            >
              <Link
                href="https://www.linkedin.com/in/iamprathameshmore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>

              <Link
                href="https://x.com/iampm_23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>

              <Link
                href="https://wa.me/918421334187"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </nav>
            {/* Theme Toggle */}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

