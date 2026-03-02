import React from 'react';
import PageWrapper from '@/components/custom/page-wrapper';
import { SupportView } from '../views/SupportView';

export function SupportScreen() {
    return (
        <PageWrapper
            title="Support"
            subtitle="Get help and support for your account."
            showInitialLoadingOnly={false}
        >
            <SupportView />
        </PageWrapper>
    );
}