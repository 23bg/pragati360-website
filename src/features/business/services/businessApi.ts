import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '@/shared/types/api';
import { API } from '@/shared/constants';
import { Business, BusinessWithRole, CreateBusinessPayload, UpdateBusinessPayload } from '../types/business.type';

export const businessApi = createApi({
    reducerPath: 'businessApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include'
    }),
    tagTypes: ['Business'],
    endpoints: (builder) => ({
        getBusinesses: builder.query<BusinessWithRole[], void>({
            query: () => API.BUSINESSES.ALL,
            providesTags: ['Business'],
        }),
        getBusiness: builder.query<Business, string>({
            query: (id) => API.BUSINESSES.GET(id),
            providesTags: (result, error, id) => [{ type: 'Business', id }],
        }),
        createBusiness: builder.mutation<Business, CreateBusinessPayload>({
            query: (payload) => ({
                url: API.BUSINESSES.CREATE,
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: ['Business'],
        }),
        updateBusiness: builder.mutation<Business, { id: string; data: UpdateBusinessPayload }>({
            query: ({ id, data }) => ({
                url: API.BUSINESSES.UPDATE(id),
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Business', id }],
        }),
        publishBusiness: builder.mutation<Business, string>({
            query: (id) => ({
                url: API.BUSINESSES.PUBLISH(id),
                method: 'POST',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Business', id }],
        }),
    }),
});

export const {
    useGetBusinessesQuery,
    useGetBusinessQuery,
    useCreateBusinessMutation,
    useUpdateBusinessMutation,
    usePublishBusinessMutation,
} = businessApi;