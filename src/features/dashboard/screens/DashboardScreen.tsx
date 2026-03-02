import React from 'react';
import { useGetDashboardStatsQuery } from '../services/dashboardApi';
import { DashboardView } from '../views/DashboardView';

export function DashboardScreen() {
    const { data, isLoading, isError } = useGetDashboardStatsQuery();

    // Extract the data for the view
    const cards = data?.data?.cards || [];

    return (
        <DashboardView
            cards={cards}
            isLoading={isLoading}
            isError={isError}
        />
    );
}