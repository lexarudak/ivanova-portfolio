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

export const selectAboutEditBlockId = createSelector(
  selectAboutSlice,
  about => about.editBlockId,
)
