import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `contacts`,
        }),
        getContact: builder.query({
            query: (id) => `contacts/${id}`,
        }),
        addContact: builder.mutation({
            query: (data) => ({
                url: 'addContact',
                method: 'POST',
                body: data,
            }),
        }),
        setProfile: builder.mutation({
            query: ({ id, data }) => ({
                url: `setProfile/${id}`,
                method: 'PUT',
                body: data,
            }),
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery, useGetContactQuery, useAddContactMutation, useSetProfileMutation } = contactApi