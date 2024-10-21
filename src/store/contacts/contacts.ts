import { createSlice } from "@reduxjs/toolkit"
import { TitleValueData } from "../../shared/types"
import { fetchContacts } from "./actions"

const initialState = {
  contacts: [] as TitleValueData,
  isLoading: false,
}

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true
    })
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false
      state.contacts = action.payload
    })
  },
})

export const { setContacts } = contactsSlice.actions

export default contactsSlice.reducer
