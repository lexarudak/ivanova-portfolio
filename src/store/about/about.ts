import { createSlice } from "@reduxjs/toolkit"
import { ABOUT_BLOCK_ID } from "../../shared/constants"
import { ExperienceData, SkillsData } from "../../shared/types"

type AboutState = {
  about: string
  editBlockId: ABOUT_BLOCK_ID | null
  title: string
  info: {
    location: string
    languages: string[]
  }
  image: string
  skills: SkillsData
  experience: ExperienceData[]
  education: ExperienceData[]
}

const initialState: AboutState = {
  about: "",
  title: "",
  editBlockId: null,
  info: {
    languages: [],
    location: "",
  },
  image: "",
  skills: {
    intermediate: [],
    advanced: [],
    novice: [],
  },
  experience: [],
  education: [],
}

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAboutData: (state, action) => {
      state.about = action.payload.about
    },
    setAbout: (state, action) => {
      state.about = action.payload
    },
    setEditBlockId: (state, action) => {
      state.editBlockId = action.payload
    },
  },
})

export const { setAbout, setEditBlockId, setAboutData } = aboutSlice.actions

export default aboutSlice.reducer
