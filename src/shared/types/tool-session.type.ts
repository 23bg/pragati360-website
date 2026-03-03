export type ToolType =
    | "google-review-reply-generator"
    | "reputation-health-score"
    | "lead-response-risk-calculator"
    | "google-optimization-checklist"
    | "multi-outlet-comparison";

export interface ToolSession {
    sessionId: string;
    email?: string;
    toolType: ToolType;
    inputData: Record<string, unknown>;
    resultScore?: number;
    createdAt: string;
}
