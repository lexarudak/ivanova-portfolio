import { LoaderFunction } from "react-router-dom"
import { ContactsData } from "../../shared/types"
interface ContactsService {
  (): {
    getContacts: LoaderFunction<ContactsData>
    postContacts: (contacts: ContactsData) => Promise<ContactsData>
  }
}

const headers = { "Content-Type": "application/json" }

export const contactsService: ContactsService = () => {
  const ORIGIN = `${import.meta.env.VITE_APP_API_URL}/contacts`

  return {
    async getContacts() {
      const res = await fetch(ORIGIN)
      const data = await res.json()

      return data
    },

    async postContacts(contacts) {
      const res = await fetch(ORIGIN, {
        method: "POST",
        headers,
        body: JSON.stringify({
          contacts: contacts.map(({ title, value }) => ({ title, value })),
        }),
      })
      const data = await res.json()

      return data
    },
  }
}
