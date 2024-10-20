import { getMockedResponse } from "../../shared/helpers"
import { ServiceProps, TitleValueData } from "../../shared/types"
import { MOCKED_CONTACTS } from "./mock"
interface ContactsService {
  (props: ServiceProps): {
    getContacts: () => Promise<TitleValueData>
    postContacts: (contacts: TitleValueData) => Promise<TitleValueData>
  }
}

const headers = { "Content-Type": "application/json" }

export const contactsService: ContactsService = ({ useMockData }) => {
  const ORIGIN = `${import.meta.env.VITE_APP_API_URL}/contacts`

  return {
    async getContacts() {
      if (useMockData) {
        return getMockedResponse<TitleValueData>(MOCKED_CONTACTS)
      }
      const res = await fetch(ORIGIN)
      const data = await res.json()

      return data
    },

    async postContacts(contacts) {
      const res = await fetch(ORIGIN, {
        method: "POST",
        headers,
        body: JSON.stringify({
          contacts,
        }),
      })
      const data = await res.json()

      return data
    },
  }
}
