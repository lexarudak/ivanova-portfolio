import { configureStore } from "@reduxjs/toolkit"
import app from "./app"
import contacts from "./contacts"

export const store = configureStore({
  reducer: {
    app,
    contacts,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
