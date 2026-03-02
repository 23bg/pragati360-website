import z from "zod";

export const createPostSchema = z.object({
    outletId: z.string().min(1, "Outlet ID is required"),
    source: z.enum(["INTERNAL", "GBP"]).default("INTERNAL"),
    googlePostId: z.string().optional(),
    title: z.string().optional(),
    summary: z.string().min(1, "Post summary is required"),
    languageCode: z.string().optional(),
    mediaUrls: z.array(z.string().url()).default([]),
    callToAction: z.any().optional(),
    startTime: z.date().optional(),
    endTime: z.date().optional(),
    publishTime: z.date().optional(),
    status: z.enum(["DRAFT", "PUBLISHED", "EXPIRED", "REMOVED"]).default("DRAFT"),
});

export type CreatePostFormData = z.infer<typeof createPostSchema>;