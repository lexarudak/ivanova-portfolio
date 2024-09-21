import { createSlice } from "@reduxjs/toolkit"
import { ContactsData } from "../../shared/types"

const initialState = {
  contacts: [] as ContactsData,
}

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload
    },
  },
})

export const { setContacts } = contactsSlice.actions

export default contactsSlice.reducer
