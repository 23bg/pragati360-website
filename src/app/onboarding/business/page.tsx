"use client";

import { useRouter } from "next/navigation";
import { BusinessOnboardingForm } from "@/features/business/components/BusinessOnboardingForm";
import Link from "next/link";

export default function BusinessOnboardingPage() {
    const router = useRouter();

    // const handleBusinessCreated = () => {
    //     // After business is created, redirect to dashboard
    //     // The session will be invalidated and refetched, showing business.exists = true
    //     router.push("/dashboard");
    // };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <div className="w-full max-w-4xl space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Welcome to Pragati360</h1>
                    <p className="text-muted-foreground mt-2">
                        Let's set up your business to get started with managing your online presence.
                    </p>
                </div>

                {/* <BusinessOnboardingForm onSuccess={handleBusinessCreated} /> */}

                <div className="text-center text-sm text-muted-foreground">
                    <p>Already have a business set up? <Link href="/dashboard" className="text-primary hover:underline">Go to Dashboard</Link></p>
                </div>
            </div>
        </div>
    );
}