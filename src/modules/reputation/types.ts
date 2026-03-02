export type ReputationPlatform = "google" | "instagram" | "website";

export type ReviewStatus = "NEW" | "ALERTED" | "REPLIED";

export interface ReviewEntity {
    internalReviewId: string;
    platform: ReputationPlatform;
    platformReviewId: string;
    outletId: string;
    orgId: string;
    rating: number;
    comment: string;
    sentimentScore: number;
    status: ReviewStatus;
    riskScore: number;
    createdAt: Date;
    repliedAt: Date | null;
}

export type ReputationEventType =
    | "NEW_REVIEW"
    | "NEGATIVE_SPIKE"
    | "RATING_DROP"
    | "SLA_BREACH";

export interface ReputationEvent {
    type: ReputationEventType;
    outletId: string;
    severity: number;
    timestamp: Date;
    resolved: boolean;
    reviewId?: string;
    metadata?: Record<string, unknown>;
}

export interface ExternalReviewPayload {
    platformReviewId: string;
    outletId: string;
    orgId: string;
    rating: number;
    comment?: string;
    createdAt: string | Date;
}
