import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LeftTopNavigationButtons {
    personalProfileIcon: boolean;
    communityOutlineIcon: boolean;
    statusUnreadIcon: boolean;
    newsletterOutlineIcon: boolean;
    newChatOutlineIcon: boolean;
    menuDotIcon: boolean;
}

export interface FilterButtons {
    buttonAll: boolean;
    buttonUnread: boolean;
    buttonContacts: boolean;
    buttonGroups: boolean;
}

interface ButtonsState {
    leftTopNavigationButtons: LeftTopNavigationButtons;
    filterButtons: FilterButtons;
}

const initialState: ButtonsState = {
    leftTopNavigationButtons: {
        personalProfileIcon: false,
        communityOutlineIcon: false,
        statusUnreadIcon: false,
        newsletterOutlineIcon: false,
        newChatOutlineIcon: false,
        menuDotIcon: false
    },
    filterButtons: {
        buttonAll: true,
        buttonUnread: false,
        buttonContacts: false,
        buttonGroups: false
    }
};

export const filtersSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        setLeftTopNavigationButtons: (state, action: PayloadAction<{ buttonName: keyof LeftTopNavigationButtons, buttonValue: boolean }>) => {
            state.leftTopNavigationButtons = {
                ...state.leftTopNavigationButtons,
                [action.payload.buttonName]: action.payload.buttonValue,
            };
        },
        setButtonLeftTopNavigation: (state, action: PayloadAction<{ buttonName: keyof LeftTopNavigationButtons, buttonValue: boolean }>) => {
            state.leftTopNavigationButtons[action.payload.buttonName] = action.payload.buttonValue;
        },
        setFilterButtons: (state, action: PayloadAction<{ buttonName: keyof FilterButtons | string, buttonValue: boolean }>) => {
            state.filterButtons = {
                ...state.filterButtons,
                [action.payload.buttonName]: action.payload.buttonValue,
            }
        }
    }
});

export const { setLeftTopNavigationButtons, setButtonLeftTopNavigation, setFilterButtons } = filtersSlice.actions;

export default filtersSlice.reducer;













// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     leftTopNavigationButtons: {
//         personalProfileIcon: false,
//         communityOutlineIcon: false,
//         statusUnreadIcon: false,
//         newsletterOutlineIcon: false,
//         newChatOutlineIcon: false,
//         menuDotIcon: false
//     },
//     filterButtons: {
//         buttonAll: true,
//         buttonUnread: false,
//         buttonContacts: false,
//         buttonGroups: false
//     },
// }

// export const filtersSlice = createSlice({
//     name: 'buttons',
//     initialState,
//     reducers: {
//         setLeftTopNavigationButtons: (state, action) => {
//             state.leftTopNavigationButtons = Object.fromEntries(Object.entries(state.leftTopNavigationButtons).map(([name, value]) => [name, name === action.payload.buttonName ? action.payload.buttonValue : false]))
//         },
//         setButtonLeftTopNavigation: (state, action) => {
//             state.leftTopNavigationButtons[action.payload.buttonName] = action.payload.buttonValue
//         },
//         setFilterButtons: (state, action) => {
//             state.filterButtons = Object.fromEntries(Object.entries(state.filterButtons).map(([name, value]) => [name, name === action.payload.buttonName ? action.payload.buttonValue : false]))
//         }
//     },
// })

// export const { setLeftTopNavigationButtons, setButtonLeftTopNavigation, setFilterButtons } = filtersSlice.actions

// export default filtersSlice.reducer