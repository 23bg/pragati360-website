import { type ReputationPlatform, type ReviewEntity } from "@/modules/reputation/types";

export type SyncJobType = "POST_REPLY" | "SYNC_REVIEW";
export type SyncJobStatus = "PENDING" | "PROCESSING" | "FAILED" | "COMPLETED";

export interface OutboundSyncJob {
    id: string;
    idempotencyKey: string;
    orgId: string;
    outletId: string;
    platform: ReputationPlatform;
    type: SyncJobType;
    payload: Record<string, unknown>;
    status: SyncJobStatus;
    attempts: number;
    createdAt: Date;
    updatedAt: Date;
}

export function createReplySyncJob(
    review: ReviewEntity,
    replyText: string,
    createdAt = new Date()
): OutboundSyncJob {
    const idempotencyKey = `${review.internalReviewId}:reply:${replyText.trim().toLowerCase()}`;

    return {
        id: `job:${idempotencyKey}`,
        idempotencyKey,
        orgId: review.orgId,
        outletId: review.outletId,
        platform: review.platform,
        type: "POST_REPLY",
        payload: {
            platformReviewId: review.platformReviewId,
            replyText,
        },
        status: "PENDING",
        attempts: 0,
        createdAt,
        updatedAt: createdAt,
    };
}

export function enqueueUniqueJob(queue: OutboundSyncJob[], job: OutboundSyncJob): OutboundSyncJob[] {
    if (queue.some((existing) => existing.idempotencyKey === job.idempotencyKey && existing.status !== "FAILED")) {
        return queue;
    }

    return [...queue, job];
}
