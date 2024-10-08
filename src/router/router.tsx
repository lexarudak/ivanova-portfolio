import { createBrowserRouter } from "react-router-dom"
import Root from "../pages/root"
import { PAGES } from "./constants"
import WorksPage from "../pages/works-page"
import ProjectPage from "../pages/project-page"
import AboutPage from "../pages/about-page/about-page"
import ContactsPage from "../pages/contacts-page"

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
        element: <AboutPage />,
      },
      {
        path: PAGES.contacts,
        element: <ContactsPage />,
      },
    ],
  },
])

export default router
