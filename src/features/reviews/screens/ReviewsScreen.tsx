import React from 'react';
import { ReviewsView } from '../views/ReviewsView';

export function ReviewsScreen() {
    // For now, placeholder data
    const reviews: any[] = [];
    const isLoading = false;
    const isError = false;

    return (
        <ReviewsView
            reviews={reviews}
            isLoading={isLoading}
            isError={isError}
        />
    );
}