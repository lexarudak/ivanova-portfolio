import { RootState } from "../store"
import { createSelector } from "reselect"

export const selectAboutSlice = (state: RootState) => state.about

export const selectAbout = createSelector(
  selectAboutSlice,
  about => about.about,
)

export const selectAboutEditBlockId = createSelector(
  selectAboutSlice,
  about => about.editBlockId,
)
