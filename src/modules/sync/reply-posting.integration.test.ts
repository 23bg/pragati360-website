import { describe, expect, it } from "vitest";
import { markReviewReplied } from "../reputation/service";
import { type ReviewEntity } from "../reputation/types";
import { createReplySyncJob, enqueueUniqueJob } from "./outboundQueue";

const review: ReviewEntity = {
    internalReviewId: "google:r-100",
    platform: "google",
    platformReviewId: "r-100",
    outletId: "outlet-12",
    orgId: "org-5",
    rating: 2,
    comment: "slow response",
    sentimentScore: -0.8,
    status: "ALERTED",
    riskScore: 52,
    createdAt: new Date("2026-03-01T08:00:00.000Z"),
    repliedAt: null,
};

describe("reply posting integration", () => {
    it("creates one idempotent reply sync job and marks review replied", () => {
        const job = createReplySyncJob(review, "Thanks for your feedback. We have fixed this.");
        const queue = enqueueUniqueJob([], job);
        const duplicateQueue = enqueueUniqueJob(queue, job);
        const updated = markReviewReplied(review, new Date("2026-03-01T10:00:00.000Z"));

        expect(queue.length).toBe(1);
        expect(duplicateQueue.length).toBe(1);
        expect(updated.status).toBe("REPLIED");
        expect(updated.repliedAt).not.toBeNull();
    });
});
