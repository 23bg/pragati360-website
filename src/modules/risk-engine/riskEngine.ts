import { type ReputationEvent, type ReviewEntity } from "@/modules/reputation/types";

export type OutletHealthState = "GREEN" | "YELLOW" | "RED";

export interface RiskWeights {
    unansweredNegatives: number;
    recentRatingDrop: number;
    avgResponseTime: number;
}

export interface RiskEvaluationResult {
    outletId: string;
    orgId: string;
    riskScore: number;
    healthState: OutletHealthState;
    events: ReputationEvent[];
}

const DEFAULT_WEIGHTS: RiskWeights = {
    unansweredNegatives: 12,
    recentRatingDrop: 30,
    avgResponseTime: 0.8,
};

const DAY_MS = 24 * 60 * 60 * 1000;

function avgRating(reviews: ReviewEntity[]): number {
    if (!reviews.length) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return total / reviews.length;
}

function averageResponseTimeHours(reviews: ReviewEntity[]): number {
    const replied = reviews.filter((review) => review.repliedAt);
    if (!replied.length) return 0;

    const totalMs = replied.reduce((sum, review) => {
        return sum + (review.repliedAt!.getTime() - review.createdAt.getTime());
    }, 0);

    return totalMs / replied.length / (60 * 60 * 1000);
}

function toHealthState(riskScore: number): OutletHealthState {
    if (riskScore >= 60) return "RED";
    if (riskScore >= 25) return "YELLOW";
    return "GREEN";
}

export function evaluateOutletRisk(
    reviews: ReviewEntity[],
    now = new Date(),
    weights: RiskWeights = DEFAULT_WEIGHTS
): RiskEvaluationResult {
    if (!reviews.length) {
        return {
            outletId: "unknown",
            orgId: "unknown",
            riskScore: 0,
            healthState: "GREEN",
            events: [],
        };
    }

    const sorted = [...reviews].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    const outletId = sorted[0].outletId;
    const orgId = sorted[0].orgId;
    const events: ReputationEvent[] = [];

    const unansweredNegatives = sorted.filter((review) => review.rating <= 3 && !review.repliedAt).length;

    const fiveDaysAgo = new Date(now.getTime() - 5 * DAY_MS);
    const negativesIn5Days = sorted.filter(
        (review) => review.rating <= 3 && review.createdAt.getTime() >= fiveDaysAgo.getTime()
    ).length;

    if (negativesIn5Days >= 3) {
        events.push({
            type: "NEGATIVE_SPIKE",
            outletId,
            severity: Math.min(100, negativesIn5Days * 15),
            timestamp: now,
            resolved: false,
        });
    }

    const sevenDaysAgo = new Date(now.getTime() - 7 * DAY_MS);
    const recent = sorted.filter((review) => review.createdAt.getTime() >= sevenDaysAgo.getTime());
    const prior = sorted.filter((review) => review.createdAt.getTime() < sevenDaysAgo.getTime());
    const ratingDrop = prior.length ? avgRating(prior) - avgRating(recent) : 0;

    if (ratingDrop >= 0.2) {
        events.push({
            type: "RATING_DROP",
            outletId,
            severity: Math.min(100, Math.round(ratingDrop * 100)),
            timestamp: now,
            resolved: false,
            metadata: { ratingDrop },
        });
    }

    const staleReplies = sorted.filter(
        (review) => review.rating <= 3 && !review.repliedAt && now.getTime() - review.createdAt.getTime() > DAY_MS
    );

    if (staleReplies.length > 0) {
        events.push({
            type: "SLA_BREACH",
            outletId,
            severity: Math.min(100, staleReplies.length * 20),
            timestamp: now,
            resolved: false,
            reviewId: staleReplies[0].internalReviewId,
        });
    }

    const avgResponseTime = averageResponseTimeHours(sorted);

    const riskScore = Math.max(
        0,
        Math.round(
            unansweredNegatives * weights.unansweredNegatives +
            Math.max(0, ratingDrop) * weights.recentRatingDrop +
            avgResponseTime * weights.avgResponseTime
        )
    );

    return {
        outletId,
        orgId,
        riskScore,
        healthState: toHealthState(riskScore),
        events,
    };
}
