import { createAsyncThunk } from "@reduxjs/toolkit"
import { contactsService } from "../../service/contacts-service/contacts-service"
import { isFeatureFlagActive } from "../../feature-flag/helpers"
import { FEATURE_FLAG } from "../../feature-flag/constants"

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const useMockData = isFeatureFlagActive(FEATURE_FLAG.MOCK_DATA)
    return await contactsService({ useMockData }).getContacts()
  },
)
