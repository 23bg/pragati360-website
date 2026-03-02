import { type ReviewEntity } from "@/modules/reputation/types";

export type EscalationLevel = 1 | 2 | 3;
export type EscalationChannel = "IN_APP" | "FCM" | "WHATSAPP" | "EMAIL";

export interface EscalationRecord {
    reviewId: string;
    outletId: string;
    orgId: string;
    level: EscalationLevel;
    active: boolean;
    lastEscalatedAt: Date;
    channels: EscalationChannel[];
    history: Array<{
        level: EscalationLevel;
        escalatedAt: Date;
        channels: EscalationChannel[];
        reason: string;
    }>;
}

const LEVEL_1_DELAY_MS = 0;
const LEVEL_2_DELAY_MS = 12 * 60 * 60 * 1000;
const LEVEL_3_DELAY_MS = 24 * 60 * 60 * 1000;

function channelsForLevel(level: EscalationLevel): EscalationChannel[] {
    if (level === 1) return ["IN_APP", "FCM"];
    if (level === 2) return ["IN_APP", "EMAIL"];
    return ["IN_APP", "EMAIL", "WHATSAPP"];
}

export function startEscalation(review: ReviewEntity, now = new Date()): EscalationRecord | null {
    if (review.status === "REPLIED") return null;

    return {
        reviewId: review.internalReviewId,
        outletId: review.outletId,
        orgId: review.orgId,
        level: 1,
        active: true,
        lastEscalatedAt: new Date(now.getTime() + LEVEL_1_DELAY_MS),
        channels: channelsForLevel(1),
        history: [
            {
                level: 1,
                escalatedAt: new Date(now.getTime() + LEVEL_1_DELAY_MS),
                channels: channelsForLevel(1),
                reason: "Negative review detected",
            },
        ],
    };
}

export function advanceEscalation(record: EscalationRecord, now = new Date()): EscalationRecord {
    if (!record.active) return record;
    if (record.level === 3) return record;

    const nextLevel = (record.level + 1) as EscalationLevel;
    const requiredDelay = nextLevel === 2 ? LEVEL_2_DELAY_MS : LEVEL_3_DELAY_MS;
    const eligibleAt = record.lastEscalatedAt.getTime() + requiredDelay;

    if (now.getTime() < eligibleAt) return record;

    const channels = channelsForLevel(nextLevel);
    return {
        ...record,
        level: nextLevel,
        channels,
        lastEscalatedAt: now,
        history: [
            ...record.history,
            {
                level: nextLevel,
                escalatedAt: now,
                channels,
                reason: nextLevel === 2 ? "SLA breach after 12h" : "Persistent SLA breach after 24h",
            },
        ],
    };
}

export function resolveEscalation(record: EscalationRecord, resolvedAt = new Date()): EscalationRecord {
    return {
        ...record,
        active: false,
        history: [
            ...record.history,
            {
                level: record.level,
                escalatedAt: resolvedAt,
                channels: record.channels,
                reason: "Review replied, escalation closed",
            },
        ],
    };
}
