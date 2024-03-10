import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_SERVER_BASEURL}:${process.env.REACT_APP_SERVER_PORT}/` }),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `contacts`,
        }),
        getContact: builder.query({
            query: (id) => `contacts/${id}`,
        }),
        authenticate: builder.query({
            query: (contact_no) => `login/${contact_no}`
        }),
        addContact: builder.mutation({
            query: (data) => ({
                url: 'addContact',
                method: 'POST',
                body: data,
            }),
        }),
        setProfile: builder.mutation({
            query: ({ id, formData }) => ({
                url: `setProfile/${id}`,
                method: 'PUT',
                body: formData,
            }),
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery, useGetContactQuery, useAuthenticateQuery, useAddContactMutation, useSetProfileMutation } = contactApi