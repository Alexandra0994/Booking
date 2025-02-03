import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rootApi = createApi({
    reducerPath: 'rootApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
    endpoints: (builder) => ({
        getAuth: builder.mutation({
            query: (body) => ({
                url: 'auth',
                method: 'POST',
                body,
            })
        }),
        getBooking: builder.query({
            query: () => `booking`,
        }),
    }),
});

export const { useGetAuthMutation, useGetBookingQuery } = rootApi;

