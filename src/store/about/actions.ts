import { createAsyncThunk } from "@reduxjs/toolkit"
import { aboutService } from "../../service/about-service/about-service"
import { isFeatureFlagActive } from "../../feature-flag/helpers"
import { FEATURE_FLAG } from "../../feature-flag/constants"

export const fetchPageInfo = createAsyncThunk(
  "about/fetchPageInfo",
  async () => {
    const useMockData = isFeatureFlagActive(FEATURE_FLAG.MOCK_DATA)
    return await aboutService({ useMockData }).getAbout()
  },
)
