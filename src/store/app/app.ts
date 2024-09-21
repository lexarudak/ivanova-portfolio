import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  isEditMode: false,
  editBlockId: "",
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
    setEditBlockId: (state, action) => {
      state.editBlockId = action.payload
    },
  },
})

export const { setIsLoading, setIsEditMode, setEditBlockId } = appSlice.actions

export default appSlice.reducer
