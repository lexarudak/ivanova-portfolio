import { useParams } from "react-router-dom"
import styles from "./project-page.module.css"
import Crumbs from "../../components/crumbs"
import { MOCK_PROJECTS } from "../../mock/mock-projects"
import { createCrumps } from "./helpers"

const ProjectPage = () => {
  const { projectId } = useParams()
  const { title, filters, id } =
    MOCK_PROJECTS[Number(projectId)] || MOCK_PROJECTS[0]

  return (
    <section className={styles.page}>
      {<Crumbs links={createCrumps(filters, title, id)} />}
    </section>
  )
}

export default ProjectPage
