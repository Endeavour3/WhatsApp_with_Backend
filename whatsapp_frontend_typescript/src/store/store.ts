import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messages/messagesSlice'
import filtersReducer from './filters/filtersSlice'
import contactsReducer from './contacts/contactsSlice'
import { messageApi } from './messages/messageApi';
import { contactApi } from './contacts/contactApi';

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