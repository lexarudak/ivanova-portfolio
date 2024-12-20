import { RootState } from "../store"
import { createSelector } from "reselect"

export const selectApp = (state: RootState) => state.app

export const selectIsLoading = createSelector(selectApp, app => app.isLoading)

export const selectIsEditMode = createSelector(selectApp, app => app.isEditMode)

export const selectEditBlockId = createSelector(
  selectApp,
  app => app.editBlockId,
)
