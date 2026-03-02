import z from "zod";

export const createReviewSchema = z.object({
    outletId: z.string().min(1, "Outlet ID is required"),
    source: z.enum(["INTERNAL", "GBP"]).default("GBP"),
    googleReviewId: z.string().min(1, "Google Review ID is required"),
    authorName: z.string().optional(),
    authorUrl: z.string().url().optional().or(z.literal("")),
    rating: z.number().min(1).max(5),
    comment: z.string().optional(),
    languageCode: z.string().optional(),
    reviewTime: z.date(),
    reviewState: z.enum(["PUBLISHED", "REMOVED", "PENDING"]).default("PUBLISHED"),
});

export const replyToReviewSchema = z.object({
    replyText: z.string().min(1, "Reply text is required"),
});

export type CreateReviewFormData = z.infer<typeof createReviewSchema>;
export type ReplyToReviewFormData = z.infer<typeof replyToReviewSchema>;