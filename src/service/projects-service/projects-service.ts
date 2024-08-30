import { LoaderFunction } from "react-router-dom"
import { About, Project, WorkCardData } from "../../shared/types"
interface ProjectService {
  (): {
    getAllProjects: LoaderFunction<WorkCardData[]>
    getProject: LoaderFunction<Project>
    getAbout: LoaderFunction<About>
  }
}

export const projectService: ProjectService = () => {
  const ORIGIN = `${import.meta.env.VITE_APP_API_URL}`
  return {
    async getAllProjects() {
      const res = await fetch(`${ORIGIN}/projects`)
      const data = await res.json()

      return data
    },

    async getProject({ params: { projectId } }) {
      const res = await fetch(`${ORIGIN}/projects/${projectId}`)
      const data = await res.json()

      return data
    },

    async getAbout() {
      const res = await fetch(`${ORIGIN}/about`)
      const data = await res.json()

      return data
    },
  }
}
