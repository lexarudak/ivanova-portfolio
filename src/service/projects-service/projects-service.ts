import { AllProjects, Project, ServiceProps } from "../../shared/types"
import { MOCKED_ALL_PROJECTS, PROJECTS } from "./mock"
interface ProjectService {
  (props?: ServiceProps): {
    getAllProjects: () => Promise<AllProjects>
    getProject: (id: string) => Promise<Project>
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

    async getProject(projectId) {
      if (props?.useMockData) {
        return Promise.resolve<Project>(
          PROJECTS.find(({ id }) => id === projectId) || PROJECTS[0],
        )
      }
      const res = await fetch(`${ORIGIN}/projects/${projectId}`)
      const data = await res.json()

      return data
    },
  }
}
