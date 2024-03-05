import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const messageApi = createApi({
    reducerPath: 'messageApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
    endpoints: (builder) => ({
        getMessagesByContact: builder.query({
            query: ({ send_from, send_to }) => `messages?send_from=${send_from}&send_to=${send_to}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMessagesByContactQuery } = messageApi