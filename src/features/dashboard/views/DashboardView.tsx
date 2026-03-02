import React from 'react';
import PageWrapper from '@/components/custom/page-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StatCard } from '../types';

interface DashboardViewProps {
    cards: StatCard[];
    isLoading: boolean;
    isError: boolean;
}

export function DashboardView({ cards, isLoading, isError }: DashboardViewProps) {
    const findCardValue = (patterns: RegExp[], fallback: string) => {
        const match = cards.find((card) => patterns.some((pattern) => pattern.test(card.label.toLowerCase())));
        return match ? String(match.value) : fallback;
    };

    const activeRisksRaw = findCardValue([/risk/, /alert/], '0');
    const activeRisks = Number(activeRisksRaw.replace(/[^0-9.]/g, '')) || 0;

    const healthState: 'GREEN' | 'YELLOW' | 'RED' =
        activeRisks >= 5 ? 'RED' : activeRisks >= 1 ? 'YELLOW' : 'GREEN';

    const healthStyles = {
        GREEN: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
        YELLOW: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
        RED: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    };

    const avgRating = findCardValue([/rating/], '0.0');
    const responseTime = findCardValue([/response/], 'N/A');
    const escalationsPending = findCardValue([/escalation/, /pending/], String(activeRisks));

    return (
        <PageWrapper
            title="Reputation Operations"
            subtitle="Source-of-truth control layer for risk detection, escalation, prevention, and recovery."
            showInitialLoadingOnly={false}
        >
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardDescription>Reputation Health Status</CardDescription>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            {healthState}
                            <Badge className={healthStyles[healthState]}>{healthState} STATE</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        {healthState === 'RED'
                            ? 'Critical risk detected. Prioritize urgent replies and recovery actions now.'
                            : healthState === 'YELLOW'
                                ? 'Active risk signals detected. Resolve pending alerts before they escalate.'
                                : 'No critical risk currently detected. Maintain response SLA and monitoring cadence.'}
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <Card>
                        <CardHeader>
                            <CardDescription>Avg Rating</CardDescription>
                            <CardTitle>{avgRating}</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardDescription>Response Time</CardDescription>
                            <CardTitle>{responseTime}</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardDescription>Active Risks</CardDescription>
                            <CardTitle>{activeRisksRaw}</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardDescription>Escalations Pending</CardDescription>
                            <CardTitle>{escalationsPending}</CardTitle>
                        </CardHeader>
                    </Card>
                </div>

                {isLoading && <p className="text-sm text-muted-foreground">Updating risk and escalation signals...</p>}
                {isError && <p className="text-sm text-red-600">Unable to load live reputation metrics.</p>}
            </div>
        </PageWrapper>
    );
}