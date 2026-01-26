"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Globe } from "lucide-react";

import { HEADER_NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900 text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* LEFT: Brand + Desktop Nav */}
        <div className="flex items-center gap-8">
          {/* Brand */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {HEADER_NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop Language Switcher */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>हिंदी</DropdownMenuItem>
                <DropdownMenuItem>मराठी</DropdownMenuItem>
                <DropdownMenuItem>தமிழ்</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop CTA */}
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-white text-zinc-950 hover:bg-zinc-200"
          >
            <Link href="/early-access">Get Started</Link>
          </Button>

          {/* Mobile Menu Button (RIGHT) */}
          <div className="md:hidden">
            <Sheet >
              <SheetTrigger asChild >
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="flex flex-col bg-zinc-950 border-r border-zinc-800 text-white"
              >
                {/* <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden> */}

                {/* Nav links */}
                <div className="mt-6 flex flex-col gap-6">
                  {HEADER_NAV_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-base font-medium text-muted-foreground hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Language Switcher (FULL) */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <Globe className="h-4 w-4" />
                      Language
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>हिंदी</DropdownMenuItem>
                    <DropdownMenuItem>मराठी</DropdownMenuItem>
                    <DropdownMenuItem>தமிழ்</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Get Started pinned at bottom */}
                <Button
                  asChild
                  size="sm"
                  className="mt-4 bg-white text-zinc-950 hover:bg-zinc-200"
                >
                  <Link href="/early-access">Get Started</Link>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
