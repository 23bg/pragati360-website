import { PostStatus, PostSource } from '../../../shared/types';

export interface Post {
    id: string;
    outletId: string;
    source: PostSource;
    googlePostId?: string;
    title?: string;
    summary: string;
    languageCode?: string;
    mediaUrls: string[];
    callToAction?: Record<string, any>;
    startTime?: Date;
    endTime?: Date;
    publishTime?: Date;
    status: PostStatus;
    rawResponse?: Record<string, any>;
    syncedAt?: Date;
    syncError?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreatePostPayload {
    outletId: string;
    source?: PostSource;
    googlePostId?: string;
    title?: string;
    summary: string;
    languageCode?: string;
    mediaUrls?: string[];
    callToAction?: Record<string, any>;
    startTime?: Date;
    endTime?: Date;
    publishTime?: Date;
    status?: PostStatus;
}