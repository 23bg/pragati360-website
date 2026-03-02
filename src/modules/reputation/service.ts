import {
    type ExternalReviewPayload,
    type ReputationPlatform,
    type ReviewEntity,
} from "./types";

function clampSentimentFromRating(rating: number): number {
    return Math.max(-1, Math.min(1, (rating - 3) / 2));
}

export function mapExternalReviewToEntity(
    input: ExternalReviewPayload,
    platform: ReputationPlatform
): ReviewEntity {
    const createdAt = new Date(input.createdAt);

    return {
        internalReviewId: `${platform}:${input.platformReviewId}`,
        platform,
        platformReviewId: input.platformReviewId,
        outletId: input.outletId,
        orgId: input.orgId,
        rating: input.rating,
        comment: input.comment ?? "",
        sentimentScore: clampSentimentFromRating(input.rating),
        status: "NEW",
        riskScore: 0,
        createdAt,
        repliedAt: null,
    };
}

export function markReviewAlerted(review: ReviewEntity, riskScore: number): ReviewEntity {
    return {
        ...review,
        status: "ALERTED",
        riskScore,
    };
}

export function markReviewReplied(review: ReviewEntity, repliedAt = new Date()): ReviewEntity {
    return {
        ...review,
        status: "REPLIED",
        repliedAt,
    };
}
