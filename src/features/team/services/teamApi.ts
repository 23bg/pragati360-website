import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '@/shared/types/api';

export const teamApi = createApi({
    reducerPath: 'teamApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (builder) => ({
        getTeamMembers: builder.query<ApiResponse<any[]>, void>({
            query: () => 'team',
        }),
    }),
});

export const { useGetTeamMembersQuery } = teamApi;