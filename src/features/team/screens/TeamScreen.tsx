import React from 'react';
import PageWrapper from '@/components/custom/page-wrapper';
import { TeamView } from '../views/TeamView';

export function TeamScreen() {
    return (
        <PageWrapper
            title="Team Management"
            subtitle="Invite and manage team members."
            showInitialLoadingOnly={false}
        >
            <TeamView />
        </PageWrapper>
    );
}