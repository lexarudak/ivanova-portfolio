import { createSlice } from "@reduxjs/toolkit"
import { ABOUT_BLOCK_ID } from "../../shared/constants"
import {
  ExperienceData,
  SkillsData,
  WorkExperienceData,
} from "../../shared/types"

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
  experience: WorkExperienceData[]
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
    advanced: [],
    intermediate: [],
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
      state.skills = action.payload.skills
      state.experience = action.payload.experience
    },
    setAbout: (state, action) => {
      state.about = action.payload
    },
    setSkills: (state, action) => {
      state.skills = action.payload
    },
    setExperience: (state, action) => {
      const idx = state.experience.findIndex(
        ({ id }) => action.payload.id === id,
      )

      if (idx === -1) {
        state.experience = [action.payload, ...state.experience]
      } else {
        state.experience[idx] = action.payload
      }
    },
    clearExperience: state => {
      state.experience = state.experience.filter(({ isSaved }) => isSaved)
    },
    setEditBlockId: (state, action) => {
      state.editBlockId = action.payload
    },
  },
})

export const {
  setAbout,
  setEditBlockId,
  setAboutData,
  setSkills,
  setExperience,
  clearExperience,
} = aboutSlice.actions

export default aboutSlice.reducer
