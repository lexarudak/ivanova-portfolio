import { RootState } from "../store"
import { createSelector } from "reselect"

export const selectAboutSlice = (state: RootState) => state.about

export const selectAbout = createSelector(
  selectAboutSlice,
  about => about.about,
)

export const selectSkills = createSelector(
  selectAboutSlice,
  about => about.skills,
)

export const selectExperience = createSelector(
  selectAboutSlice,
  about => about.experience,
)

export const selectAboutLocation = createSelector(
  selectAboutSlice,
  about => about.info.location,
)

export const selectAboutLanguages = createSelector(
  selectAboutSlice,
  about => about.info.languages,
)

export const selectExperienceById = (expId: string) =>
  createSelector(selectAboutSlice, about =>
    about.experience.find(({ id }) => id === expId),
  )

export const selectEducationById = (edId: string) =>
  createSelector(selectAboutSlice, about =>
    about.education.find(({ id }) => id === edId),
  )

export const selectExperienceOrder = createSelector(
  selectAboutSlice,
  about => about.experienceOrder,
)

export const selectEducationOrder = createSelector(
  selectAboutSlice,
  about => about.educationOrder,
)
