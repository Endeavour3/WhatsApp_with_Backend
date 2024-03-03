import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messagesSlice'
import filtersReducer from './filtersSlice'
import contactsReducer from './contactsSlice'

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        messages: messagesReducer,
        filters: filtersReducer,
    },
})