import { createSlice } from "@reduxjs/toolkit"
import { Project, WorkCardData } from "../../shared/types"
import { fetchProject, fetchProjects } from "./actions"

const initialState = {
  projects: [] as WorkCardData[],
  projectsOrder: [] as string[],
  isLoading: false,
  current: {
    id: "",
    title: "",
    filters: [],
    image: "",
    year: "",
    location: "",
    participation: [],
    blocks: [],
  } as Project,
}

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProjects.pending, state => {
      state.isLoading = true
    })
    builder.addCase(fetchProjects.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.projects = payload.projects
      state.projectsOrder = payload.order
        ? payload.order.split(",")
        : payload.projects.map(({ id }) => id)
    })
    builder.addCase(fetchProject.pending, state => {
      state.isLoading = true
      state.current = initialState.current
    })
    builder.addCase(fetchProject.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.current = payload
    })
  },
})

// export const {} = projectsSlice.actions

export default projectsSlice.reducer
