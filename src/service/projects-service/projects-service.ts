import { LoaderFunction } from "react-router-dom"
import { About, AllProjects, Project, ServiceProps } from "../../shared/types"
import { MOCKED_ALL_PROJECTS } from "./mock"
interface ProjectService {
  (props?: ServiceProps): {
    getAllProjects: () => Promise<AllProjects>
    getProject: LoaderFunction<Project>
    getAbout: LoaderFunction<About>
  }
}

export const projectService: ProjectService = props => {
  const ORIGIN = `${import.meta.env.VITE_APP_API_URL}`
  return {
    async getAllProjects() {
      if (props?.useMockData) {
        return Promise.resolve<AllProjects>(MOCKED_ALL_PROJECTS)
      }
      const res = await fetch(`${ORIGIN}/projects`)
      const data = (await res.json()) as AllProjects

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
