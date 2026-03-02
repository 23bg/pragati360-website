import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '@/shared/constants';
import { User } from '../types/user.type';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include'
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getAllUsers: builder.query<User[], void>({
            query: () => API.USERS.ALL,
            providesTags: ['User'],
        }),
        getCurrentUser: builder.query<User, void>({
            query: () => API.USERS.ME,
            providesTags: ['User'],
        }),
        getUser: builder.query<User, string>({
            query: (id) => API.USERS.GET(id),
            providesTags: (result, error, id) => [{ type: 'User', id }],
        }),
        createUser: builder.mutation<User, Partial<User>>({
            query: (payload) => ({
                url: API.USERS.CREATE,
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: ['User'],
        }),
        updateUser: builder.mutation<User, { id: string; data: Partial<User> }>({
            query: ({ id, data }) => ({
                url: API.USERS.UPDATE(id),
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
        }),
        uploadProfileImage: builder.mutation<{ url: string }, FormData>({
            query: (formData) => ({
                url: API.USERS.UPLOAD_PROFILE,
                method: 'POST',
                body: formData,
            }),
        }),
    }),
});

export const {
    useGetAllUsersQuery,
    useGetCurrentUserQuery,
    useGetUserQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useUploadProfileImageMutation,
} = userApi;
