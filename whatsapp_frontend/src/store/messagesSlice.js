import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [
        // {
        //     id: 1,
        //     message_content: "hii",
        //     send_from: 1,
        //     send_to: 2,
        //     created_at: "2024-02-10T07:59:00.000Z",
        //     delivered_at: null,
        //     read_at: null
        // },
        // {
        //     "id": 2,
        //     "message_content": "bye",
        //     "send_from": 1,
        //     "send_to": 3,
        //     "created_at": "2024-02-10T07:59:00.000Z",
        //     "delivered_at": null,
        //     "read_at": null
        // },

        // {
        //     "message_content":"jasdhfjas",
        //     "send_from":1,
        //     "send_to":4,
        //     "created_at":"2001-01-01 12:12:12"
        // }
    ],
    searchText: "",
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setNewMessages: (state, action) => {
            state.messages = action.payload
        },
        setMessages: (state, action) => {
            state.messages.push(action.payload)
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload
        },
    },
})

export const { setNewMessages, setMessages, setSearchText } = messagesSlice.actions

export default messagesSlice.reducer

// https://medium.com/@bitsol/using-react-tool-kit-rtk-query-with-react-router-v6-9eac07521bc5

// https://redux-toolkit.js.org/rtk-query/usage/examples