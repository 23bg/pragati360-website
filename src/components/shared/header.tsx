import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { HEADER_NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          {SITE_NAME}
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {HEADER_NAV_LINKS.map((item) => ( // Using HEADER_NAV_LINKS
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Theme Toggle */} {/* Updated comment */}
        <div className="flex items-center gap-2">
          <Button size="sm" asChild> {/* Single CTA button */}
            <Link href="/pricing">Start Now</Link> {/* Links to pricing */}
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
