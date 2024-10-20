import { createSlice } from "@reduxjs/toolkit"
import { WorkCardData } from "../../shared/types"
import { fetchProjects } from "./actions"

const initialState = {
  projects: [] as WorkCardData[],
  projectsOrder: [] as string[],
  isLoading: false,
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
  },
})

// export const {} = projectsSlice.actions

export default projectsSlice.reducer
