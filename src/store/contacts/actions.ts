import { createAsyncThunk } from "@reduxjs/toolkit"
import { contactsService } from "../../service/contacts-service/contacts-service"

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    return await contactsService().getContacts()
  },
)
