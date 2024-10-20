import { createAsyncThunk } from "@reduxjs/toolkit"
import { isFeatureFlagActive } from "../../feature-flag/helpers"
import { FEATURE_FLAG } from "../../feature-flag/constants"
import { projectService } from "../../service/projects-service/projects-service"

export const fetchProjects = createAsyncThunk(
  "contacts/fetchProjects",
  async () => {
    const useMockData = isFeatureFlagActive(FEATURE_FLAG.MOCK_DATA)
    return await projectService({ useMockData }).getAllProjects()
  },
)
