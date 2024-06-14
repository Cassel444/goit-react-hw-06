import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        prepare: (name, number) => {
            return {
                payload: {
                    name,
                    number,
                    id: nanoid(),
                },
            };
        },
        deleteContact(state, action) {
            console.log(state);
            const index = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(index, 1);
        },
    },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (store) => store.contacts.items;