import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '@/shared/constants';
import { Outlet, CreateOutletPayload } from '../types/outlet.type';

export const outletsApi = createApi({
    reducerPath: 'outletsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include'
    }),
    tagTypes: ['Outlet'],
    endpoints: (builder) => ({
        getOutlets: builder.query<Outlet[], string>({
            query: (businessId) => API.BUSINESSES.OUTLETS.ALL(businessId),
            providesTags: ['Outlet'],
        }),
        getOutlet: builder.query<Outlet, { businessId: string; outletId: string }>({
            query: ({ businessId, outletId }) => API.BUSINESSES.OUTLETS.GET(businessId, outletId),
            providesTags: (result, error, { outletId }) => [{ type: 'Outlet', id: outletId }],
        }),
        createOutlet: builder.mutation<Outlet, { businessId: string; data: CreateOutletPayload }>({
            query: ({ businessId, data }) => ({
                url: API.BUSINESSES.OUTLETS.CREATE(businessId),
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Outlet'],
        }),
        updateOutlet: builder.mutation<Outlet, { businessId: string; outletId: string; data: Partial<CreateOutletPayload> }>({
            query: ({ businessId, outletId, data }) => ({
                url: API.BUSINESSES.OUTLETS.UPDATE(businessId, outletId),
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (result, error, { outletId }) => [{ type: 'Outlet', id: outletId }],
        }),
        deleteOutlet: builder.mutation<void, { businessId: string; outletId: string }>({
            query: ({ businessId, outletId }) => ({
                url: API.BUSINESSES.OUTLETS.DELETE(businessId, outletId),
                method: 'DELETE',
            }),
            invalidatesTags: ['Outlet'],
        }),
        assignManager: builder.mutation<void, { businessId: string; outletId: string; userId: string }>({
            query: ({ businessId, outletId, userId }) => ({
                url: API.BUSINESSES.OUTLETS.MANAGERS.ASSIGN(businessId, outletId, userId),
                method: 'POST',
            }),
            invalidatesTags: (result, error, { outletId }) => [{ type: 'Outlet', id: outletId }],
        }),
        removeManager: builder.mutation<void, { businessId: string; outletId: string; userId: string }>({
            query: ({ businessId, outletId, userId }) => ({
                url: API.BUSINESSES.OUTLETS.MANAGERS.REMOVE(businessId, outletId, userId),
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, { outletId }) => [{ type: 'Outlet', id: outletId }],
        }),
    }),
});

export const {
    useGetOutletsQuery,
    useGetOutletQuery,
    useCreateOutletMutation,
    useUpdateOutletMutation,
    useDeleteOutletMutation,
    useAssignManagerMutation,
    useRemoveManagerMutation,
} = outletsApi;