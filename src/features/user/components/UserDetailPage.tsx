// "use client";

// import React, { useEffect } from "react";
// import PageWrapper from "@/components/custom/page-wrapper";
// import { useUser } from "../hooks/useUser";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Loader2 } from "lucide-react";
// import { Router } from "next/router";
// import ROUTES from "@/shared/constants/route";

// export default function UserDetailPage({ id }: { id?: string }) {

//     const { currentUser, loading, error, getCurrentUser } = useUser();

//     useEffect(() => {
//         if (id) {
//             getCurrentUser(id);

//         }
//     }, []);

//     return (
//         <PageWrapper
//             title="User Details"
//             showInitialLoadingOnly={false}
//             isLoading={loading}
//             error={error}
//             onRetry={() => id && getCurrentUser(id)}
//             showBackButton
//             backHref={ROUTES.CONSOLE.USERS}
//             backLabel="Back to Users"
//         >
//             {loading && (
//                 <div className="flex justify-center items-center py-10">
//                     <Loader2 className="w-6 h-6 animate-spin" />
//                 </div>
//             )}

//             {!loading && currentUser && (
//                 <Card className="max-w-2xl mx-auto mt-6">
//                     <CardHeader>
//                         <CardTitle>{currentUser.name}</CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-2">
//                         <p>
//                             <strong>Name:</strong> {currentUser.name}
//                         </p>
//                         <p>
//                             <strong>Email:</strong> {currentUser.email}
//                         </p>
//                     </CardContent>
//                 </Card>
//             )}
//         </PageWrapper>
//     );
// }


"use client";

import React, { useEffect } from "react";
import PageWrapper from "@/components/custom/page-wrapper";
import { useUser } from "../hooks/useUser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Mail, Shield, UserRound, KeyRound, Settings, Trash2 } from "lucide-react";
import ROUTES from "@/shared/constants/route";
import { Button } from "@/components/ui/button";
import { Router } from "next/router";

export default function UserDetailPage({ id }: { id?: string }) {

    const { currentUser, loading, error, getCurrentUser } = useUser();

    useEffect(() => {
        if (id) {
            getCurrentUser(id);
        }
    }, []);

    if (loading) {
        return (
            <PageWrapper
                title="User Details"
                isLoading={loading}
                showInitialLoadingOnly={false}
                error={error}
                onRetry={() => id && getCurrentUser(id)}
                showBackButton
                // backHref={ROUTES.CONSOLE.USERS}
                backLabel="Back to Users"
            >
                <div className="flex justify-center items-center py-10">
                    <Loader2 className="w-6 h-6 animate-spin text-white" />
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper
            title="User Details"
            showInitialLoadingOnly={false}
            isLoading={loading}
            error={error}
            onRetry={() => id && getCurrentUser(id)}
            showBackButton
            // backHref={Router().backHref}
            backLabel="Back to Users"
        >

            {/* ============================
                USER INFORMATION CARD
            ============================ */}
            {currentUser && (
                <Card className="max-w-3xl mx-auto mt-6 bg-neutral-900 border-white/10">
                    <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                            <UserRound className="text-blue-400" /> User Profile
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="text-white space-y-4">
                        <div className="space-y-1">
                            <p className="text-sm text-gray-400">Name</p>
                            <p className="font-medium">{currentUser.name}</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-blue-300" />
                                {currentUser.email}
                            </p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm text-gray-400">Role</p>
                            <p className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-green-300" />
                                {currentUser.role || "User"}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* ============================
                ACCOUNT SETTINGS CARD
            ============================ */}
            <Card className="max-w-3xl mx-auto mt-6 bg-neutral-900 border-white/10">
                <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                        <Settings className="text-yellow-400" /> Account Settings
                    </CardTitle>
                </CardHeader>

                <CardContent className="text-white space-y-6">

                    {/* Reset Password */}
                    <div className="flex items-center justify-between bg-neutral-800 p-4 rounded-lg border border-white/10">
                        <div>
                            <p className="font-medium">Reset Password</p>
                            <p className="text-sm text-gray-400">Send password reset email.</p>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            <KeyRound className="mr-2 h-4 w-4" /> Reset
                        </Button>
                    </div>

                    {/* Change Role */}
                    <div className="flex items-center justify-between bg-neutral-800 p-4 rounded-lg border border-white/10">
                        <div>
                            <p className="font-medium">User Role</p>
                            <p className="text-sm text-gray-400">
                                Current role: <span className="text-blue-400">{currentUser?.role || "user"}</span>
                            </p>
                        </div>

                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                            Change Role
                        </Button>
                    </div>

                    {/* Danger Zone */}
                    <div className="bg-neutral-800 p-4 rounded-lg border border-red-500/30">
                        <p className="font-medium text-red-400 flex items-center gap-2">
                            <Trash2 className="h-4 w-4" /> Danger Zone
                        </p>
                        <p className="text-sm text-gray-400 mb-3">
                            Delete this user account permanently.
                        </p>

                        <Button variant="destructive">
                            Delete User
                        </Button>
                    </div>
                </CardContent>
            </Card>

        </PageWrapper>
    );
}
