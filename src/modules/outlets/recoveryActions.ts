import { type OutletHealthState } from "@/modules/risk-engine/riskEngine";

export interface RecoveryAction {
    id: string;
    priority: "HIGH" | "MEDIUM" | "LOW";
    title: string;
    description: string;
}

export function getRecoveryActionsForOutlet(health: OutletHealthState, riskScore: number): RecoveryAction[] {
    if (health === "GREEN") {
        return [
            {
                id: "maintain-response-sla",
                priority: "LOW",
                title: "Maintain 24h response SLA",
                description: "Keep response consistency to avoid future escalation events.",
            },
        ];
    }

    if (health === "YELLOW") {
        return [
            {
                id: "reply-negative-reviews",
                priority: "HIGH",
                title: "Reply to pending negative reviews",
                description: "Close pending negative reviews before they trigger higher-level escalation.",
            },
            {
                id: "publish-confidence-offer",
                priority: "MEDIUM",
                title: "Publish confidence-building offer",
                description: "Run a targeted offer update to improve local perception and recovery momentum.",
            },
        ];
    }

    return [
        {
            id: "urgent-reply",
            priority: "HIGH",
            title: "Urgent response required",
            description: "Respond immediately to high-risk unresolved reviews to stop escalation drift.",
        },
        {
            id: "send-review-request-campaign",
            priority: "HIGH",
            title: "Launch review request campaign",
            description: "Request fresh positive reviews from recent satisfied customers.",
        },
        {
            id: "publish-recovery-offer",
            priority: riskScore > 80 ? "HIGH" : "MEDIUM",
            title: "Publish recovery offer",
            description: "Post a contextual recovery offer to rebuild trust and engagement.",
        },
    ];
}
