import { createAsyncThunk } from "@reduxjs/toolkit"
import { aboutService } from "../../service/about-service/about-service"

export const fetchPageInfo = createAsyncThunk(
  "about/fetchPageInfo",
  async () => {
    return await aboutService().getAbout()
  },
)
