import { LoaderFunction } from "react-router-dom"
import { About } from "../../shared/types"
interface ProjectService {
  (): {
    getAbout: LoaderFunction<About>
    setAbout: (about: string) => Promise<{ about: string }>
  }
}

const headers = { "Content-Type": "application/json" }

export const aboutService: ProjectService = () => {
  const ORIGIN = `${import.meta.env.VITE_APP_API_URL}/about`

  return {
    async getAbout() {
      const res = await fetch(ORIGIN)
      const data = await res.json()

      return data
    },

    async setAbout(about: string) {
      const res = await fetch(ORIGIN, {
        method: "POST",
        headers,
        body: JSON.stringify({ about }),
      })
      const data: { about: string } = await res.json()

      return data
    },
  }
}
