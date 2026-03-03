"use client";

import React, { useEffect } from "react";
import PageWrapper from "@/components/custom/page-wrapper";
import { useUser } from "../hooks/useUser";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function IntegrationPage() {
    const { currentUser, loading, error, getCurrentUser } = useUser();

    useEffect(() => {
        getCurrentUser();

        // Listen for OAuth popup messages
        const handleOAuthMessage = (event: MessageEvent) => {
            const type = event.data?.type;

            if (type === "GOOGLE_OAUTH_SUCCESS") {
                toast.success("Google connected successfully");
                getCurrentUser();
            }
        };

        window.addEventListener("message", handleOAuthMessage);

        return () => window.removeEventListener("message", handleOAuthMessage);
    }, []);

    // Generic popup opener
    const openOAuthPopup = (url: string) => {
        const popup = window.open(
            url,
            "oauth_popup",
            "width=500,height=650,left=300,top=100"
        );

        if (!popup) toast.error("Please enable popups to continue.");
    };

    // Start Google OAuth
    const connectGoogle = async () => {
        try {
            const res = await fetch("http://localhost:4422/api/v1/google/auth-url");
            const data = await res.json();

            const url = data?.url;
            if (!url) {
                toast.error("Google OAuth URL not found.");
                return;
            }

            openOAuthPopup(url);
        } catch (err) {
            console.error("Google OAuth error", err);
            toast.error("Failed to connect Google.");
        }
    };

    if (loading) {
        return (
            <PageWrapper
                showInitialLoadingOnly
                title="Integrations"
                subtitle="Connect your accounts"
                isLoading
            >
                <div className="flex justify-center items-center py-10">
                    <Loader2 className="w-6 h-6 animate-spin" />
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper
            showInitialLoadingOnly
            title="Integrations"
            subtitle="Connect your accounts"
            error={error}
            onRetry={() => getCurrentUser()}
        >
            <div className="space-y-4">

                {/* Google Integration */}
                <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                        <p className="font-medium">Google</p>
                        <p className="text-sm text-zinc-400">
                            {currentUser?.googleAccessToken ? "Connected" : "Not Connected"}
                        </p>
                    </div>

                    {!currentUser?.googleAccessToken ? (
                        <Button className="border border-zinc-700 bg-zinc-950 text-zinc-100 hover:bg-zinc-900 dark:border-zinc-300 dark:bg-zinc-200 dark:text-zinc-950 dark:hover:bg-zinc-300" onClick={connectGoogle}>
                            Connect
                        </Button>
                    ) : (
                        <Button variant="outline" onClick={connectGoogle}>
                            Reconnect
                        </Button>
                    )}
                </div>

            </div>
        </PageWrapper>
    );
}
