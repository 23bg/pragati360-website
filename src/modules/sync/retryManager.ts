import { type OutboundSyncJob } from "./outboundQueue";

export interface RetryDecision {
    shouldRetry: boolean;
    nextRetryAt: Date | null;
    reason: "RETRYABLE_ERROR" | "TOKEN_EXPIRED" | "MAX_RETRIES_REACHED" | "NON_RETRYABLE";
}

const MAX_RETRIES = 5;
const BASE_DELAY_MS = 2_000;

export function getBackoffDelayMs(attempt: number): number {
    const boundedAttempt = Math.max(0, Math.min(10, attempt));
    return BASE_DELAY_MS * 2 ** boundedAttempt;
}

export function decideRetry(
    job: OutboundSyncJob,
    errorCode: "TOKEN_EXPIRED" | "RATE_LIMITED" | "NETWORK" | "BAD_REQUEST" | "UNKNOWN",
    now = new Date()
): RetryDecision {
    if (errorCode === "BAD_REQUEST") {
        return { shouldRetry: false, nextRetryAt: null, reason: "NON_RETRYABLE" };
    }

    if (job.attempts >= MAX_RETRIES) {
        return { shouldRetry: false, nextRetryAt: null, reason: "MAX_RETRIES_REACHED" };
    }

    const delay = getBackoffDelayMs(job.attempts);

    if (errorCode === "TOKEN_EXPIRED") {
        return {
            shouldRetry: true,
            nextRetryAt: new Date(now.getTime() + delay),
            reason: "TOKEN_EXPIRED",
        };
    }

    return {
        shouldRetry: true,
        nextRetryAt: new Date(now.getTime() + delay),
        reason: "RETRYABLE_ERROR",
    };
}
