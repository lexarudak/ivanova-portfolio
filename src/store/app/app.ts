import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  isEditMode: false,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setIsEditMode: (state, action) => {
      state.isEditMode = action.payload
    },
  },
})

export const { setIsLoading, setIsEditMode } = appSlice.actions

export default appSlice.reducer
