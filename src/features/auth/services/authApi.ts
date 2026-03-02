import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '@/shared/types/api';
import { API } from '@/shared/constants';
import { User } from '@/features/user/types/user.type';

export interface SessionData {
    user: {
        id: string;
        email: string;
        role: 'OWNER' | 'MANAGER';
        emailVerified: boolean;
    };
    business: {
        exists: boolean;
        status?: 'DRAFT' | 'ACTIVE';
    };
    gbp: {
        status: 'NOT_CONNECTED' | 'CONNECTED' | 'ERROR';
    };
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include'
    }),
    tagTypes: ['Session'],
    endpoints: (builder) => ({
        getSession: builder.query<SessionData, void>({
            query: () => API.AUTH.ME,
            providesTags: ['Session'],
        }),
    }),
});

export const { useGetSessionQuery } = authApi;