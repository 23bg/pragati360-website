"use client";

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";

export default function WebsiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="min-h-screen">
                <div> <Header /></div>
                <main className="h-full">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
