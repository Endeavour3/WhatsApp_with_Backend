// import { createSlice, createApi } from '@reduxjs/toolkit';
// import { fetchBaseQuery } from '@reduxjs/toolkit/query';
// import axios from 'axios';

// // const dataApi = createApi({
// //     reducerPath: 'dataApi',
// //     //   baseQuery: axios.create({ baseURL: 'your_api_url' }),
// //     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
// //     endpoints: (builder) => ({
// //         addData: builder.mutation({
// //             query: (data) => ({
// //                 url: '/data',
// //                 method: 'POST',
// //                 data,
// //             }),
// //         }),
// //     }),
// // });

// // export const { useAddDataMutation } = dataApi;

// const initialState = {
//     data: [],
//     isLoading: false,
//     error: null,
// };

// const dataSlice = createSlice({
//     name: 'data',
//     initialState,
//     reducers: {
//         // Add any additional reducers here, such as clearing errors
//         clearError: (state) => {
//             state.error = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addData.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(addData.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 // Add the newly added data to the state (if applicable)
//                 state.data.push(action.payload);
//             })
//             .addCase(addData.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.error.message;
//             });
//     },
// });

// export default dataSlice.reducer;
