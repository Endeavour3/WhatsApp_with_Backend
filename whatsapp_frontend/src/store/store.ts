import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messagesSlice'
import filtersReducer from './filtersSlice'
import contactsReducer from './contactsSlice'
import { messageApi } from './messageApi';
import { contactApi } from './contactApi';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        messages: messagesReducer,
        filters: filtersReducer,
        [messageApi.reducerPath]: messageApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactApi.middleware).concat(messageApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch







// import { configureStore } from '@reduxjs/toolkit';
// import messagesReducer from './messagesSlice'
// import filtersReducer from './filtersSlice'
// import contactsReducer from './contactsSlice'
// import { messageApi } from './messageApi';
// import { contactApi } from './contactApi';
// // import dataReducer from './dataSlice'
// // import dataSlice from './dataSlice';

// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         messages: messagesReducer,
//         filters: filtersReducer,
//         [messageApi.reducerPath]: messageApi.reducer,
//         [contactApi.reducerPath]: contactApi.reducer,
//         // data: dataReducer,
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactApi.middleware).concat(messageApi.middleware)
// })
