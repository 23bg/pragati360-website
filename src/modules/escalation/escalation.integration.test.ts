import { describe, expect, it } from "vitest";
import { advanceEscalation, resolveEscalation, startEscalation } from "./escalationEngine";
import { type ReviewEntity } from "@/modules/reputation/types";

const baseReview: ReviewEntity = {
    internalReviewId: "google:r1",
    platform: "google",
    platformReviewId: "r1",
    outletId: "outlet-1",
    orgId: "org-1",
    rating: 1,
    comment: "bad service",
    sentimentScore: -1,
    status: "NEW",
    riskScore: 80,
    createdAt: new Date("2026-03-01T08:00:00.000Z"),
    repliedAt: null,
};

describe("escalation engine", () => {
    it("advances from level 1 to level 2 after SLA delay and then resolves", () => {
        const l1At = new Date("2026-03-01T09:00:00.000Z");
        const started = startEscalation(baseReview, l1At);

        expect(started).not.toBeNull();
        expect(started!.level).toBe(1);
        expect(started!.active).toBe(true);

        const l2At = new Date("2026-03-01T22:00:01.000Z");
        const advanced = advanceEscalation(started!, l2At);
        expect(advanced.level).toBe(2);

        const resolved = resolveEscalation(advanced, new Date("2026-03-01T22:30:00.000Z"));
        expect(resolved.active).toBe(false);
        expect(resolved.history.length).toBeGreaterThan(2);
    });
});
