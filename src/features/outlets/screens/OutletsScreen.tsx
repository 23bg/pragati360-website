import React from 'react';
import PageWrapper from '@/components/custom/page-wrapper';
import { OutletsView } from '../views/OutletsView';

export function OutletsScreen() {
    return (
        <PageWrapper
            title="Outlets"
            subtitle="Manage your business outlets and locations."
            showInitialLoadingOnly={false}
        >
            <OutletsView />
        </PageWrapper>
    );
}