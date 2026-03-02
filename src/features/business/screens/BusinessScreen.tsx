import React from 'react';
import PageWrapper from '@/components/custom/page-wrapper';
import { BusinessView } from '../views/BusinessView';

export function BusinessScreen() {
    return (
        <PageWrapper
            title="My Business"
            subtitle="Manage your business profile and settings."
            showInitialLoadingOnly={false}
        >
            <BusinessView />
        </PageWrapper>
    );
}