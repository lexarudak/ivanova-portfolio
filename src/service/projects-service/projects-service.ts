import { WorkCardData } from "../../shared/types"

interface ProjectService {
  (): {
    getAllProjects: () => Promise<readonly WorkCardData[]>
  }
}

export const projectService: ProjectService = () => {
  const url = `${import.meta.env.VITE_APP_API_URL}/projects`
  console.log(import.meta.env)

  return {
    async getAllProjects() {
      const res = await fetch(url)
      const data = await res.json()

      return data
    },
  }
}
