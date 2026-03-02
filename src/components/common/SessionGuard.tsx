"use client";

import { useSession } from "@/shared/hooks/useSession";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

const publicPaths = ["/login", "/signup", "/verification"];

export function SessionGuard({ children }: { children: React.ReactNode }) {
    const { data: session, isLoading, isError } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Don't redirect while loading
        if (isLoading) return;

        const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

        if (isError || !session) {
            // No session - redirect to login if not already on public path
            if (!isPublicPath) {
                router.push("/login");
            }
            return;
        }

        // Has session
        if (isPublicPath) {
            // On public path with session - redirect based on business status
            if (!session.business?.exists) {
                router.push("/onboarding/business");
            } else {
                router.push("/dashboard");
            }
            return;
        }

        // On protected path with session
        if (!session.business?.exists && !pathname.startsWith("/onboarding")) {
            router.push("/onboarding/business");
            return;
        }

        // If on onboarding page but business now exists, redirect to dashboard
        if (pathname.startsWith("/onboarding/business") && session.business?.exists) {
            router.push("/dashboard");
            return;
        }

        // Business exists, allow access to dashboard
    }, [session, isLoading, isError, pathname, router]);

    // Show loading while checking session
    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-background text-muted-foreground">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                    <p className="text-sm font-medium">Loading, please wait...</p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}