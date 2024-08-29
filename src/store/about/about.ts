import { createSlice } from "@reduxjs/toolkit"

type AboutState = {
  about: string
  editBlockId: string | null
}

const initialState: AboutState = {
  about: "",
  editBlockId: null,
}

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAbout: (state, action) => {
      state.about = action.payload
    },
    setEditBlockId: (state, action) => {
      state.editBlockId = action.payload
    },
  },
})

export const { setAbout, setEditBlockId } = aboutSlice.actions

export default aboutSlice.reducer
