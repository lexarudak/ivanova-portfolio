import { configureStore } from "@reduxjs/toolkit"
import app from "./app"
import contacts from "./contacts"
import about from "./about"
import projects from "./projects"

export const store = configureStore({
  reducer: {
    app,
    contacts,
    about,
    projects,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
