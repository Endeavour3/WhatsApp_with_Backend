import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactLastSeen {
    date: string;
    time: string;
}

interface Contact {
    contactId: number;
    contactName: string;
    profilePicture: string;
    contactNo: string;
    contactAbout: string;
    contactLastSeen: ContactLastSeen;
}

interface ContactsState {
    loggedInUser: number | string;
    contacts: Contact[];
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







// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     loggedInUser: "",
//     contacts: [
//         {
//             contactId: 1,
//             contactName: "Ashutosh Verulkar",
//             profilePicture: "",
//             contactNo: "+917218724953",
//             contactAbout: "I am not perfect but I am limited edition",
//             contactLastSeen: {
//                 date: "2024-02-28",
//                 time: "15:23"
//             }
//         },
//         {
//             contactId: 2,
//             contactName: "Rameshwar Varpe",
//             profilePicture: "",
//             contactNo: "+919673524106",
//             contactAbout: "Urgent calls only",
//             contactLastSeen: {
//                 date: "2024-02-28",
//                 time: "06:42"
//             }
//         },
//         // {
//         //     "id": 2,
//         //     "contact_no": "+919673524106",
//         //     "contact_name": "Rameshwar Varpe",
//         //     "profile_picture": {
//         //         "type": "Buffer",
//         //         "data": []
//         //     },
//         //     "contact_about": "Urgent calls only",
//         //     "last_seen": "2024-02-28T06:42:12.000Z"
//         // },
//         // {
//         //     "id": 3,
//         //     "contact_no": "+917744938053",
//         //     "contact_name": "Harshal Dhokane",
//         //     "profile_picture": {
//         //         "type": "Buffer",
//         //         "data": []
//         //     },
//         //     "contact_about": "Sleeping",
//         //     "last_seen": "2024-02-28T06:42:12.000Z"
//         // },
//         // {
//         //     "id": 4,
//         //     "contact_no": "+918329086681",
//         //     "contact_name": "Sanket Gupta",
//         //     "profile_picture": {
//         //         "type": "Buffer",
//         //         "data": []
//         //     },
//         //     "contact_about": "EVERYDAY IN EVERYWAY I'M GETTING BETTER AND BETTER 😇",
//         //     "last_seen": "2024-02-28T06:42:12.000Z"
//         // },
//         // {
//         //     "id": 5,
//         //     "contact_no": "+919766764627",
//         //     "contact_name": "Abhishek Chopade",
//         //     "profile_picture": {
//         //         "type": "Buffer",
//         //         "data": []
//         //     },
//         //     "contact_about": "At work",
//         //     "last_seen": "2024-02-28T06:42:12.000Z"
//         // },
//         // {
//         //     "id": 6,
//         //     "contact_no": "+919075809004",
//         //     "contact_name": "Prajwal Ingole",
//         //     "profile_picture": {
//         //         "type": "Buffer",
//         //         "data": []
//         //     },
//         //     "contact_about": "Battery about to die",
//         //     "last_seen": "2024-02-28T06:42:12.000Z"
//         // },
//         // {
//         //     "id": 7,
//         //     "contact_no": "+919075490251",
//         //     "contact_name": "Nikhilesh Mane",
//         //     "profile_picture": {
//         //         "type": "Buffer",
//         //         "data": []
//         //     },
//         //     "contact_about": "कुळ-हिंदुत्व👑 सण-शिवजयंती💥 रुबाब-मराठा💪 शान-भगवा झेंडा🚩 दैवत-छत्रपती शिवाजी महाराज🙏 जन्मभूमी- अमरावती🚩 आमच ईमान स्वराज्य 🔱",
//         //     "last_seen": "2024-02-28T06:42:12.000Z"
//         // },
//         // {
//         //     "id": 8,
//         //     "contact_no": "+918668559528",
//         //     "contact_name": "Aditya",
//         //     "profile_picture": {
//         //         "type": "Buffer",
//         //         "data": []
//         //     },
//         //     "contact_about": "पंख त्यांचेच मजबूत असतात जे एकटे उडतात, आणि प्रवाहाविरुद्ध झेप घेतात.",
//         //     "last_seen": "2024-02-28T06:42:12.000Z"
//         // },
//         // {
//         //     "id": 9,
//         //     "contact_no": "+919284486105",
//         //     "contact_name": "Om Chokhat",
//         //     "profile_picture": {
//         //         "type": "Buffer",
//         //         "data": []
//         //     },
//         //     "contact_about": "🏢CIVIL 😎",
//         //     "last_seen": "2024-02-28T06:42:12.000Z"
//         // },
//         // {
//         //     "id": 10,
//         //     "contact_no": "+919767746080",
//         //     "contact_name": "Mangesh Ganjare",
//         //     "profile_picture": {
//         //         "type": "Buffer",
//         //         "data": []
//         //     },
//         //     "contact_about": "At work",
//         //     "last_seen": "2024-02-28T06:42:12.000Z"
//         // },
//         // {
//         //     "id": 11,
//         //     "contact_no": "+918208210160",
//         //     "contact_name": "Prathamesh Gode",
//         //     "profile_picture": {
//         //         "type": "Buffer",
//         //         "data": []
//         //     },
//         //     "contact_about": "Available",
//         //     "last_seen": "2024-02-28T06:42:12.000Z"
//         // },
//         // {
//         //     "id": 12,
//         //     "contact_no": "+919373429068",
//         //     "contact_name": "Akash Kharat",
//         //     "profile_picture": {
//         //         "type": "Buffer",
//         //         "data": []
//         //     },
//         //     "contact_about": "Available",
//         //     "last_seen": "2024-02-28T06:42:12.000Z"
//         // }
//     ],
// }

// export const contactsSlice = createSlice({
//     name: "contacts",
//     initialState,
//     reducers: {
//         setContacts: (state, action) => {
//             state.contacts = action.payload
//         },
//         setLoggedInUser: (state, action) => {
//             state.loggedInUser = action.payload
//         }
//     },
// })

// export const { setContacts, setLoggedInUser } = contactsSlice.actions

// export default contactsSlice.reducer
