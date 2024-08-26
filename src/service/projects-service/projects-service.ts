import { LoaderFunction } from "react-router-dom"
import { Project, WorkCardData } from "../../shared/types"
interface ProjectService {
  (): {
    getAllProjects: LoaderFunction<WorkCardData[]>
    getProject: LoaderFunction<Project>
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

    async getProject({ params: { projectId } }) {
      const res = await fetch(`${url}/${projectId}`)
      const data = await res.json()

      return data
    },
  }
}
