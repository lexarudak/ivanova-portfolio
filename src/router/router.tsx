import { createBrowserRouter } from "react-router-dom"
import Root from "../pages/root"
import { PAGES } from "./constants"
import WorksPage from "../pages/works-page"
import ProjectPage from "../pages/project-page"

const router = createBrowserRouter([
  {
    path: PAGES.home,
    element: <Root />,
    children: [
      {
        path: PAGES.works,
        element: <WorksPage />,
      },
      {
        path: PAGES.project,
        element: <ProjectPage />,
      },
      {
        path: PAGES.about,
        element: <section>About</section>,
      },
      {
        path: PAGES.contacts,
        element: <section>contacts</section>,
      },
    ],
  },
])

export default router
