import { createSlice } from "@reduxjs/toolkit"
import { ContactsData } from "../../shared/types"

const initialState = {
  contacts: [] as ContactsData,
  isEdit: false,
}

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload
    },
  },
})

export const { setContacts, setIsEdit } = contactsSlice.actions

export default contactsSlice.reducer
