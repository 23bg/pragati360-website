import { PostSource, ReviewState } from '../../../shared/types';

export interface Review {
    id: string;
    outletId: string;
    source: PostSource;
    googleReviewId: string;
    authorName?: string;
    authorUrl?: string;
    rating: number;
    comment?: string;
    languageCode?: string;
    reviewTime: Date;
    reviewState: ReviewState;
    replyText?: string;
    replyUserId?: string;
    replyAt?: Date;
    replySynced: boolean;
    rawResponse?: Record<string, any>;
    syncedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateReviewPayload {
    outletId: string;
    source?: PostSource;
    googleReviewId: string;
    authorName?: string;
    authorUrl?: string;
    rating: number;
    comment?: string;
    languageCode?: string;
    reviewTime: Date;
    reviewState?: ReviewState;
}

export interface ReplyToReviewPayload {
    replyText: string;
    replyUserId: string;
}