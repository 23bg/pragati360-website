import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '@/shared/constants';
import { User } from '../../user/types/user.type';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include'
    }),
    tagTypes: ['Profile'],
    endpoints: (builder) => ({
        getProfile: builder.query<User, void>({
            query: () => API.USERS.ME,
            providesTags: ['Profile'],
        }),
        updateProfile: builder.mutation<User, Partial<User>>({
            query: (data) => ({
                url: API.USERS.ME,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Profile'],
        }),
    }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;