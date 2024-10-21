import { RootState } from "../store"

export const selectAllProjects = (state: RootState) => state.projects

export const selectAllProject = (state: RootState) => state.projects.current
