import { RootState } from "../store"
import { createSelector } from "reselect"

export const selectContactsSlice = (state: RootState) => state.contacts

export const selectContacts = createSelector(
  selectContactsSlice,
  contacts => contacts.contacts,
)

export const selectIsContactsEdit = createSelector(
  selectContactsSlice,
  contacts => contacts.isEdit,
)
