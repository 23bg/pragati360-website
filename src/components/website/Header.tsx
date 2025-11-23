"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { ACCENT } from "@/shared/constants/colors";
import ROUTES from "@/shared/constants/route";

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Fixes theme mismatch hydration error
    React.useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
    ];

    return (
        <header
            className="
        sticky top-0 z-50 
        // backdrop-blur-xl 
        border-b border-border
        
      "
        >
            <Container>
                <div className="flex items-center justify-between h-16">
                    {/* ---------------- Logo ---------------- */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div
                            className="
                w-10 h-10 rounded-xl 
                flex items-center justify-center 
                text-white font-bold shadow 
                transition-transform group-hover:scale-105
              "
                            style={{
                                background: `linear-gradient(135deg, ${ACCENT.blue}, ${ACCENT.green})`,
                            }}
                        >
                            P
                        </div>
                        <span className="font-semibold text-lg">Pragati360</span>
                    </Link>

                    {/* ---------------- Desktop Navigation ---------------- */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="
                  text-sm text-muted-foreground 
                  hover:text-foreground transition
                "
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Theme Toggle (Mounted check avoids hydration mismatch) */}
                        {mounted ? (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </Button>
                        ) : (
                            <div className="h-9 w-9 rounded-full bg-muted animate-pulse" />
                        )}

                        {/* Dashboard CTA */}
                        <Link href={ROUTES.AUTH.LOG_IN}>
                            <Button className="rounded-full font-semibold px-5 shadow-sm bg-primary text-primary-foreground hover:opacity-90">
                                Dashboard
                            </Button>
                        </Link>
                    </nav>

                    {/* ---------------- Mobile Menu (Sheet) ---------------- */}
                    <Sheet>
                        <SheetTrigger className="md:hidden">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="bg-background/95 backdrop-blur-xl border-l border-border"
                        >
                            <SheetHeader>
                                <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
                            </SheetHeader>

                            <div className="mt-6 space-y-8">
                                {/* Nav List */}
                                <nav className="flex flex-col gap-4 text-sm">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="text-muted-foreground hover:text-foreground transition"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>

                                {/* Theme Toggle */}
                                <div className="pt-4 border-t border-border">
                                    {mounted && (
                                        <Button
                                            variant="outline"
                                            className="w-full rounded-xl"
                                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                        >
                                            {theme === "dark" ? (
                                                <>
                                                    <Sun className="h-4 w-4 mr-2" /> Light Mode
                                                </>
                                            ) : (
                                                <>
                                                    <Moon className="h-4 w-4 mr-2" /> Dark Mode
                                                </>
                                            )}
                                        </Button>
                                    )}
                                </div>

                                {/* Dashboard CTA */}
                                <Link href={ROUTES.AUTH.LOG_IN}>
                                    <Button className="w-full rounded-xl bg-primary text-primary-foreground shadow-md py-5 text-base font-semibold">
                                        Go to Dashboard →
                                    </Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </Container>
        </header>
    );
}
