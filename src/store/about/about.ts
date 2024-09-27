import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  About,
  ExperienceData,
  SkillsData,
  TitleValueData,
  WorkExperienceData,
} from "../../shared/types"
import { NEW_ITEM_KEY } from "../../shared/constants"

type AboutState = {
  about: string
  title: string
  info: {
    location: string
    languages: TitleValueData
  }
  image: string
  skills: SkillsData
  experience: WorkExperienceData[]
  education: ExperienceData[]
  experienceOrder: string[]
  educationOrder: string[]
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
  experienceOrder: [],
  education: [],
  educationOrder: [],
}

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAboutData: (
      state,
      {
        payload: {
          about,
          skills,
          education,
          educationOrder,
          experience,
          experienceOrder,
          location,
          languages,
        },
      }: PayloadAction<About>,
    ) => {
      state.about = about
      state.info.location = location
      state.info.languages = languages
      state.skills = skills
      state.experience = experience
      state.experienceOrder = experienceOrder
        ? experienceOrder.split(",")
        : experience.map(({ id }) => id)
      state.education = education
      state.educationOrder = educationOrder
        ? educationOrder.split(",")
        : education.map(({ id }) => id)
    },
    setEducationOrder: (state, action) => {
      state.educationOrder = action.payload
    },
    setExperienceOrder: (state, action) => {
      state.experienceOrder = action.payload
    },
    setAbout: (state, action) => {
      state.about = action.payload
    },
    setLocation: (state, action) => {
      state.info.location = action.payload
    },
    setSkills: (state, action) => {
      state.skills = action.payload
    },
    setLanguages: (state, action) => {
      state.info.languages = action.payload
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
    setEducation: (state, action) => {
      const idx = state.education.findIndex(
        ({ id }) => action.payload.id === id,
      )

      if (idx === -1) {
        state.education = [action.payload, ...state.education]
      } else {
        state.education[idx] = action.payload
      }
    },
    setAllExperiences: (state, action) => {
      state.experience = action.payload
    },
    setAllEducation: (state, action) => {
      state.education = action.payload
    },
    clearExperience: state => {
      state.experience = state.experience.filter(({ isSaved }) => isSaved)
      state.experienceOrder = state.experienceOrder.filter(
        id => !id.includes(NEW_ITEM_KEY.experience),
      )
    },
    clearEducation: state => {
      state.education = state.education.filter(({ isSaved }) => isSaved)
      state.educationOrder = state.educationOrder.filter(
        id => !id.includes(NEW_ITEM_KEY.education),
      )
    },
    deleteExperience: (state, action) => {
      state.experience = state.experience.filter(
        ({ id }) => id !== action.payload.id,
      )
      state.experienceOrder = action.payload.experienceOrder.split(",")
    },
    deleteEducation: (state, action) => {
      state.education = state.education.filter(
        ({ id }) => id !== action.payload.id,
      )
      state.educationOrder = action.payload.educationOrder.split(",")
    },
  },
})

export const {
  setEducation,
  clearEducation,
  deleteEducation,
  setAllEducation,
  setEducationOrder,
  setAbout,
  setAboutData,
  setSkills,
  setExperience,
  clearExperience,
  deleteExperience,
  setAllExperiences,
  setExperienceOrder,
  setLocation,
  setLanguages,
} = aboutSlice.actions

export default aboutSlice.reducer
