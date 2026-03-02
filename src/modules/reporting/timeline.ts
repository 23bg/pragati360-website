import { type EscalationRecord } from "@/modules/escalation/escalationEngine";
import { type ReputationEvent, type ReviewEntity } from "@/modules/reputation/types";

export type TimelineEventType =
    | "REVIEW_RECEIVED"
    | "ALERT_TRIGGERED"
    | "ESCALATION"
    | "REPLY_POSTED"
    | "OFFER_PUBLISHED"
    | "COMPLAINT_SUBMITTED";

export interface TimelineItem {
    id: string;
    outletId: string;
    orgId: string;
    type: TimelineEventType;
    timestamp: Date;
    label: string;
    metadata?: Record<string, unknown>;
}

export function buildUnifiedTimeline(input: {
    reviews: ReviewEntity[];
    events: ReputationEvent[];
    escalations: EscalationRecord[];
}): TimelineItem[] {
    const reviewItems: TimelineItem[] = input.reviews.map((review) => ({
        id: `review:${review.internalReviewId}`,
        outletId: review.outletId,
        orgId: review.orgId,
        type: "REVIEW_RECEIVED",
        timestamp: review.createdAt,
        label: `New ${review.platform} review received`,
        metadata: { rating: review.rating, status: review.status },
    }));

    const alertItems: TimelineItem[] = input.events.map((event, index) => ({
        id: `event:${event.outletId}:${event.type}:${index}`,
        outletId: event.outletId,
        orgId: "unknown",
        type: "ALERT_TRIGGERED",
        timestamp: event.timestamp,
        label: `Risk event ${event.type} triggered`,
        metadata: { severity: event.severity, resolved: event.resolved },
    }));

    const escalationItems: TimelineItem[] = input.escalations.flatMap((record) =>
        record.history.map((entry, index) => ({
            id: `esc:${record.reviewId}:${entry.level}:${index}`,
            outletId: record.outletId,
            orgId: record.orgId,
            type: "ESCALATION",
            timestamp: entry.escalatedAt,
            label: `Escalation Level ${entry.level}`,
            metadata: { channels: entry.channels, reason: entry.reason },
        }))
    );

    return [...reviewItems, ...alertItems, ...escalationItems].sort(
        (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
}
