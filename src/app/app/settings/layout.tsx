import PageWrapper from "@/components/custom/page-wrapper";
import React from "react";

export default async function MembersLayout({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <PageWrapper
            title="Settings"
            subtitle="Managed and Monitor your instagram for you business"
            showInitialLoadingOnly={false}
            onExport={undefined}
        >
            {children}
        </PageWrapper>
    )
}
