import { NextResponse } from "next/server";
import getDb from "@/lib/mongodb";
import { capturePrivateFeedback, decideFeedbackRouting } from "@/modules/feedback/feedbackService";
import { enforceOrgScope, getAuthenticatedClaims } from "@/modules/auth/session";

type FeedbackBody = {
    orgId?: unknown;
    outletId?: unknown;
    customerName?: unknown;
    phoneOrEmail?: unknown;
    message?: unknown;
    score?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as FeedbackBody;

        if (!isNonEmptyString(body.orgId) || !isNonEmptyString(body.outletId) || !isNonEmptyString(body.customerName) || !isNonEmptyString(body.message)) {
            return NextResponse.json(
                { error: "validation_error", message: "orgId, outletId, customerName, and message are required" },
                { status: 400 }
            );
        }

        const numericScore = Number(body.score);
        if (!Number.isFinite(numericScore) || numericScore < 1 || numericScore > 5) {
            return NextResponse.json(
                { error: "validation_error", message: "score must be a number between 1 and 5" },
                { status: 400 }
            );
        }

        const claims = await getAuthenticatedClaims();
        enforceOrgScope(claims, body.orgId.trim());

        const feedback = capturePrivateFeedback({
            orgId: body.orgId.trim(),
            outletId: body.outletId.trim(),
            customerName: body.customerName.trim(),
            phoneOrEmail: isNonEmptyString(body.phoneOrEmail) ? body.phoneOrEmail.trim() : undefined,
            message: body.message.trim(),
            score: numericScore,
        });

        const routing = decideFeedbackRouting(feedback);

        const db = await getDb();
        await db.collection("internal_feedback").insertOne({
            ...feedback,
            routing,
            createdAt: feedback.createdAt,
            updatedAt: feedback.createdAt,
        });

        return NextResponse.json({ success: true, data: { feedback, routing } }, { status: 201 });
    } catch (error) {
        if (error instanceof Error && (error.message === "Unauthorized" || error.message.includes("Forbidden"))) {
            return NextResponse.json({ error: "forbidden", message: error.message }, { status: 403 });
        }

        return NextResponse.json(
            {
                error: "internal_error",
                message: error instanceof Error ? error.message : "Unexpected error",
            },
            { status: 500 }
        );
    }
}
