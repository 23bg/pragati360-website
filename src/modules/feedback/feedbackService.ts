export type FeedbackSentiment = "NEGATIVE" | "NEUTRAL" | "POSITIVE";

export interface PrivateFeedback {
    feedbackId: string;
    orgId: string;
    outletId: string;
    customerName: string;
    phoneOrEmail: string | null;
    message: string;
    score: number;
    sentiment: FeedbackSentiment;
    createdAt: Date;
}

export interface FeedbackRoutingDecision {
    shouldEscalateInternally: boolean;
    eligibleForReviewRequest: boolean;
    action: "TRIAGE" | "FOLLOW_UP" | "REQUEST_PUBLIC_REVIEW";
}

export function capturePrivateFeedback(input: {
    orgId: string;
    outletId: string;
    customerName: string;
    phoneOrEmail?: string;
    message: string;
    score: number;
    now?: Date;
}): PrivateFeedback {
    const createdAt = input.now ?? new Date();
    const score = Math.max(1, Math.min(5, input.score));
    const sentiment: FeedbackSentiment = score <= 2 ? "NEGATIVE" : score === 3 ? "NEUTRAL" : "POSITIVE";

    return {
        feedbackId: `fb:${input.orgId}:${input.outletId}:${createdAt.getTime()}`,
        orgId: input.orgId,
        outletId: input.outletId,
        customerName: input.customerName,
        phoneOrEmail: input.phoneOrEmail ?? null,
        message: input.message,
        score,
        sentiment,
        createdAt,
    };
}

export function decideFeedbackRouting(feedback: PrivateFeedback): FeedbackRoutingDecision {
    if (feedback.sentiment === "NEGATIVE") {
        return {
            shouldEscalateInternally: true,
            eligibleForReviewRequest: false,
            action: "TRIAGE",
        };
    }

    if (feedback.sentiment === "POSITIVE") {
        return {
            shouldEscalateInternally: false,
            eligibleForReviewRequest: true,
            action: "REQUEST_PUBLIC_REVIEW",
        };
    }

    return {
        shouldEscalateInternally: false,
        eligibleForReviewRequest: false,
        action: "FOLLOW_UP",
    };
}
