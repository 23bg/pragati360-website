import z from "zod";

export const createTicketSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    businessId: z.string().optional(),
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    status: z.enum(["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"]).default("OPEN"),
    priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).default("MEDIUM"),
    assignedTo: z.string().optional(),
});

export type CreateTicketFormData = z.infer<typeof createTicketSchema>;