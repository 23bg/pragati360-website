import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '@/shared/constants';
import { Review, CreateReviewPayload, ReplyToReviewPayload } from '../types/review.type';

export const reviewsApi = createApi({
    reducerPath: 'reviewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include'
    }),
    tagTypes: ['Review'],
    endpoints: (builder) => ({
        getReviews: builder.query<Review[], { businessId: string; outletId: string }>({
            query: ({ businessId, outletId }) => API.BUSINESSES.OUTLETS.REVIEWS.ALL(businessId, outletId),
            providesTags: ['Review'],
        }),
        getReview: builder.query<Review, { businessId: string; outletId: string; reviewId: string }>({
            query: ({ businessId, outletId, reviewId }) => API.BUSINESSES.OUTLETS.REVIEWS.GET(businessId, outletId, reviewId),
            providesTags: (result, error, { reviewId }) => [{ type: 'Review', id: reviewId }],
        }),
        createReview: builder.mutation<Review, { businessId: string; outletId: string; data: CreateReviewPayload }>({
            query: ({ businessId, outletId, data }) => ({
                url: API.BUSINESSES.OUTLETS.REVIEWS.ALL(businessId, outletId),
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Review'],
        }),
        replyToReview: builder.mutation<Review, { businessId: string; outletId: string; reviewId: string; data: ReplyToReviewPayload }>({
            query: ({ businessId, outletId, reviewId, data }) => ({
                url: API.BUSINESSES.OUTLETS.GBP_REVIEWS.REPLY(businessId, outletId, reviewId),
                method: 'POST',
                body: data,
            }),
            invalidatesTags: (result, error, { reviewId }) => [{ type: 'Review', id: reviewId }],
        }),
    }),
});

export const {
    useGetReviewsQuery,
    useGetReviewQuery,
    useCreateReviewMutation,
    useReplyToReviewMutation,
} = reviewsApi;