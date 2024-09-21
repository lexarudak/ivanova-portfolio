import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  About,
  ExperienceData,
  SkillsData,
  WorkExperienceData,
} from "../../shared/types"

type AboutState = {
  about: string
  title: string
  info: {
    location: string
    languages: string[]
  }
  image: string
  skills: SkillsData
  experience: WorkExperienceData[]
  education: ExperienceData[]
  experienceOrder: string[]
}

const initialState: AboutState = {
  about: "",
  title: "",
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
  experienceOrder: [],
}

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAboutData: (state, action: PayloadAction<About>) => {
      state.about = action.payload.about
      state.skills = action.payload.skills
      state.experience = action.payload.experience
      state.experienceOrder = action.payload.experienceOrder.split(",")
    },
    setExperienceOrder: (state, action) => {
      state.experienceOrder = action.payload
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
    setAllExperiences: (state, action) => {
      state.experience = action.payload
    },
    clearExperience: state => {
      state.experience = state.experience.filter(({ isSaved }) => isSaved)
      state.experienceOrder = state.experienceOrder.filter(
        id => !id.includes("new"),
      )
    },
    deleteExperience: (state, action) => {
      state.experience = state.experience.filter(
        ({ id }) => id !== action.payload.id,
      )
      state.experienceOrder = action.payload.experienceOrder.split(",")
    },
  },
})

export const {
  setAbout,
  setAboutData,
  setSkills,
  setExperience,
  clearExperience,
  deleteExperience,
  setAllExperiences,
  setExperienceOrder,
} = aboutSlice.actions

export default aboutSlice.reducer
