"use client";

import React, { useEffect } from "react";
import PageWrapper from "@/components/custom/page-wrapper";
import { useGoogleBusiness } from "../hooks/useGoogleBusiness";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, RefreshCw } from "lucide-react";
import ROUTES from "@/shared/constants/route";

export default function GoogleBusinessDetailPage({ id }: { id?: string }) {
    const {
        currentAccount,
        loading,
        error,
        getGoogleAccount,
        syncAccount,
    } = useGoogleBusiness();

    useEffect(() => {
        if (id) getGoogleAccount(id);
    }, [id]);

    const handleSync = () => {
        if (id) syncAccount(id);
    };

    return (
        <PageWrapper
            title="Google Business Account"
            showInitialLoadingOnly={false}
            isLoading={loading}
            error={error}
            onRetry={() => id && getGoogleAccount(id)}
            showBackButton
            backHref={ROUTES.APP.GOOGLE_BUSINESS}
            backLabel="Back to Google Business"
        >
            {/* Loading Spinner */}
            {loading && (
                <div className="flex justify-center items-center py-10">
                    <Loader2 className="w-6 h-6 animate-spin" />
                </div>
            )}

            {/* Content */}
            {!loading && currentAccount && (
                <Card className="max-w-3xl mx-auto mt-6 bg-neutral-900 border border-white/10">
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle className="text-white">
                            Google Business Account
                        </CardTitle>

                        <Button
                            variant="secondary"
                            onClick={handleSync}
                            className="flex items-center gap-2"
                            disabled={loading}
                        >
                            <RefreshCw className="h-4 w-4" />
                            Sync Now
                        </Button>
                    </CardHeader>

                    <CardContent className="space-y-6 text-white">
                        {/* Basic Info */}
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Account Info</h3>
                            <div className="space-y-1 text-sm">
                                <p>
                                    <strong>Account ID:</strong> {currentAccount.accountId}
                                </p>
                                <p>
                                    <strong>User ID:</strong> {currentAccount.userId}
                                </p>
                                <p>
                                    <strong>Refresh Token:</strong>{" "}
                                    {currentAccount.refreshToken ? "Stored" : "Not Available"}
                                </p>
                                <p>
                                    <strong>Scope:</strong>{" "}
                                    {currentAccount.scope || "N/A"}
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Business Stats</h3>

                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="p-4 rounded-lg bg-neutral-800 border border-white/10">
                                    <p className="text-2xl font-bold">
                                        {currentAccount.locations?.length || 0}
                                    </p>
                                    <p className="text-sm">Locations</p>
                                </div>

                                <div className="p-4 rounded-lg bg-neutral-800 border border-white/10">
                                    <p className="text-2xl font-bold">
                                        {currentAccount.posts?.length || 0}
                                    </p>
                                    <p className="text-sm">Posts</p>
                                </div>

                                <div className="p-4 rounded-lg bg-neutral-800 border border-white/10">
                                    <p className="text-2xl font-bold">
                                        {currentAccount.reviews?.length || 0}
                                    </p>
                                    <p className="text-sm">Reviews</p>
                                </div>
                            </div>
                        </div>

                        {/* Timestamps */}
                        <div className="text-sm text-muted-foreground">
                            <p>
                                <strong>Created:</strong>{" "}
                                {new Date(currentAccount.createdAt).toLocaleString()}
                            </p>
                            <p>
                                <strong>Updated:</strong>{" "}
                                {new Date(currentAccount.updatedAt).toLocaleString()}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            )}
        </PageWrapper>
    );
}
