import React from 'react';
import PageWrapper from '@/components/custom/page-wrapper';
import { ProfileView } from '../views/ProfileView';

export function ProfileScreen() {
    return (
        <PageWrapper
            title="Profile"
            subtitle="Manage your personal information and preferences."
            showInitialLoadingOnly={false}
        >
            <ProfileView />
        </PageWrapper>
    );
}