import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactLastSeen {
    date: string;
    time: string;
}

export interface Contact  {
    contactId: number;
    contactName: string;
    profilePicture: string;
    contactNo: string;
    contactAbout: string;
    contactLastSeen: ContactLastSeen;
}

interface ContactsState {
    loggedInUser: number | string;
    contacts: Array<Contact>;
}

const initialState: ContactsState = {
    loggedInUser: "",
    contacts: [
        {
            contactId: 1,
            contactName: "Ashutosh Verulkar",
            profilePicture: "",
            contactNo: "+917218724953",
            contactAbout: "I am not perfect but I am limited edition",
            contactLastSeen: {
                date: "2024-02-28",
                time: "15:23"
            }
        },
        {
            contactId: 2,
            contactName: "Rameshwar Varpe",
            profilePicture: "",
            contactNo: "+919673524106",
            contactAbout: "Urgent calls only",
            contactLastSeen: {
                date: "2024-02-28",
                time: "06:42"
            }
        },
    ],
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        setContacts: (state, action: PayloadAction<Contact[]>) => {
            state.contacts = action.payload
        },
        setLoggedInUser: (state, action: PayloadAction<number | string>) => {
            state.loggedInUser = action.payload
        }
    },
})

export const { setContacts, setLoggedInUser } = contactsSlice.actions

export default contactsSlice.reducer
