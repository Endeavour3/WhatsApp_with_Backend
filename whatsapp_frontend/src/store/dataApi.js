// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const dataApi = createApi({
//     reducerPath: 'dataApi',
//     //   baseQuery: axios.create({ baseURL: 'your_api_url' }),
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
//     endpoints: (builder) => ({
//         addData: builder.mutation({
//             query: (data) => ({
//                 url: '/data',
//                 method: 'POST',
//                 data,
//             }),
//         }),
//     }),
// });

// export const { useAddDataMutation } = dataApi;