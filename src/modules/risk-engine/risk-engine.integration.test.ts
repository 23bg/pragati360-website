import { describe, expect, it } from "vitest";
import { evaluateOutletRisk } from "./riskEngine";
import { type ReviewEntity } from "@/modules/reputation/types";

function review(overrides: Partial<ReviewEntity>): ReviewEntity {
    const createdAt = overrides.createdAt ?? new Date("2026-03-01T10:00:00.000Z");
    return {
        internalReviewId: overrides.internalReviewId ?? `review:${Math.random()}`,
        platform: overrides.platform ?? "google",
        platformReviewId: overrides.platformReviewId ?? "p1",
        outletId: overrides.outletId ?? "outlet-1",
        orgId: overrides.orgId ?? "org-1",
        rating: overrides.rating ?? 5,
        comment: overrides.comment ?? "ok",
        sentimentScore: overrides.sentimentScore ?? 0.5,
        status: overrides.status ?? "NEW",
        riskScore: overrides.riskScore ?? 0,
        createdAt,
        repliedAt: overrides.repliedAt ?? null,
    };
}

describe("evaluateOutletRisk", () => {
    it("creates risk events for negative spikes and SLA breaches", () => {
        const now = new Date("2026-03-06T10:00:00.000Z");
        const reviews: ReviewEntity[] = [
            review({ rating: 1, createdAt: new Date("2026-03-03T10:00:00.000Z") }),
            review({ rating: 2, platformReviewId: "p2", createdAt: new Date("2026-03-04T10:00:00.000Z") }),
            review({ rating: 3, platformReviewId: "p3", createdAt: new Date("2026-03-05T10:00:00.000Z") }),
        ];

        const result = evaluateOutletRisk(reviews, now);

        expect(result.events.some((event) => event.type === "NEGATIVE_SPIKE")).toBe(true);
        expect(result.events.some((event) => event.type === "SLA_BREACH")).toBe(true);
        expect(["YELLOW", "RED"]).toContain(result.healthState);
    });
});
