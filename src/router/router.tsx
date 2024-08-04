import { createBrowserRouter } from "react-router-dom"
import Root from "../pages/root"
import { PAGES } from "./constants"

const router = createBrowserRouter([
  {
    path: PAGES.home,
    element: <Root />,
    children: [
      {
        path: PAGES.works,
        element: <div>Portfolio</div>,
      },
      {
        path: PAGES.skills,
        element: <div>skills</div>,
      },
      {
        path: PAGES.contacts,
        element: <div>contacts</div>,
      },
    ],
  },
])

export default router
