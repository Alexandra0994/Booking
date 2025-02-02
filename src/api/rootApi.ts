import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rootApi = createApi({
    reducerPath: 'rootApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
        }),
        getPostById: builder.query({
            query: (id) => `posts/${id}`,
        }),
    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = rootApi;

