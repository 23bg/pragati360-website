import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ReviewsViewProps {
    reviews: any[];
    isLoading: boolean;
    isError: boolean;
}

export function ReviewsView({ reviews, isLoading, isError }: ReviewsViewProps) {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Reviews list will be displayed here.</p>
                </CardContent>
            </Card>
        </div>
    );
}