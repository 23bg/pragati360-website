import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { PRODUCT_TAGLINE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              {PRODUCT_TAGLINE}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Pragati360 is a single-user business management platform that helps you
              streamline your Google Business Profile and Instagram scheduling, all from one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" asChild className="text-base px-8 py-6 rounded-xl shadow-lg">
                <Link href="/pricing">Start at ₹199/month</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 rounded-xl shadow-lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>

          {/* Dashboard Visual Mock */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/dashboard-mock.webp" // Placeholder image for dashboard
                alt="Pragati360 Dashboard Mockup"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
