import { IGooglePost } from "@/features/google-posts/types/google-post.type";
import { IGoogleLocation } from "./google-location.type";
import { IGoogleReview } from "@/features/google-reviews/types/google-review.type";

export interface IGoogleBusiness {
    id: string; // MongoDB ObjectId string
    userId: string;
    accountId: string; // accounts/xxxx
    refreshToken: string;
    scope?: string | null;

    createdAt: Date;
    updatedAt: Date;

    locations?: IGoogleLocation[];
    posts?: IGooglePost[];
    reviews?: IGoogleReview[];
}
