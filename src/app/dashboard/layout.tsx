import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import ROUTES from "@/shared/constants/route";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description:
        "Pragati360 Dashboard - Manage your business, outlets, posts, and reviews.",
};

export default async function AppLayout({
    children
}: {
    children: React.ReactNode
}) {
    // Authentication check can be handled by middleware
    // Additional role-based checks can be handled in individual components

    return <DashboardLayout>{children}</DashboardLayout>;
}
