import { TitleValueData } from "../../shared/types"
interface ContactsService {
  (): {
    getContacts: () => Promise<TitleValueData>
    postContacts: (contacts: TitleValueData) => Promise<TitleValueData>
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
          contacts,
        }),
      })
      const data = await res.json()

      return data
    },
  }
}
