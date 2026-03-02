import z from "zod";

export const createOutletSchema = z.object({
    businessId: z.string().min(1, "Business ID is required"),
    name: z.string().min(2, "Outlet name must be at least 2 characters"),
    address: z.string().optional(),
    phone: z.string().optional(),
    geoLat: z.number().optional(),
    geoLng: z.number().optional(),
    status: z.enum(["ACTIVE", "INACTIVE", "ARCHIVED"]).default("ACTIVE"),
});

export type CreateOutletFormData = z.infer<typeof createOutletSchema>;