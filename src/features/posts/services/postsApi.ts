import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '@/shared/constants';
import { Post, CreatePostPayload } from '../types/post.type';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include'
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], { businessId: string; outletId: string }>({
            query: ({ businessId, outletId }) => API.BUSINESSES.OUTLETS.POSTS.ALL(businessId, outletId),
            providesTags: ['Post'],
        }),
        getPost: builder.query<Post, { businessId: string; outletId: string; postId: string }>({
            query: ({ businessId, outletId, postId }) => API.BUSINESSES.OUTLETS.POSTS.GET(businessId, outletId, postId),
            providesTags: (result, error, { postId }) => [{ type: 'Post', id: postId }],
        }),
        createPost: builder.mutation<Post, { businessId: string; outletId: string; data: CreatePostPayload }>({
            query: ({ businessId, outletId, data }) => ({
                url: API.BUSINESSES.OUTLETS.POSTS.CREATE(businessId, outletId),
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Post'],
        }),
        updatePost: builder.mutation<Post, { businessId: string; outletId: string; postId: string; data: Partial<CreatePostPayload> }>({
            query: ({ businessId, outletId, postId, data }) => ({
                url: API.BUSINESSES.OUTLETS.POSTS.UPDATE(businessId, outletId, postId),
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (result, error, { postId }) => [{ type: 'Post', id: postId }],
        }),
        deletePost: builder.mutation<void, { businessId: string; outletId: string; postId: string }>({
            query: ({ businessId, outletId, postId }) => ({
                url: API.BUSINESSES.OUTLETS.POSTS.DELETE(businessId, outletId, postId),
                method: 'DELETE',
            }),
            invalidatesTags: ['Post'],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postsApi;