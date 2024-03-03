import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [
        {
            id: 1,
            messageContent: "hii",
            sendFrom: 1,
            sendTo: 2,
            createdAt: {
                date: "2024-02-09",
                time: "07:58"
            },
            deliveredAt: null,
            readAt: null
        },
        // {
        //     "id": 2,
        //     "message_content": "bye",
        //     "send_from": 1,
        //     "send_to": 3,
        //     "created_at": "2024-02-10T07:59:00.000Z",
        //     "delivered_at": null,
        //     "read_at": null
        // },
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
