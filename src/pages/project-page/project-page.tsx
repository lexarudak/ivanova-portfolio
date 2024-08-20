import { useParams } from "react-router-dom"
import styles from "./project-page.module.css"
import Crumbs from "../../components/crumbs"
import { MOCK_PROJECTS } from "../../mock/mock-projects"
import { createCrumps } from "./helpers"
import FilterIconBlock from "../../components/filter-icon-block"
import ProjectInfo from "../../components/project-info"

const ProjectPage = () => {
  const { projectId } = useParams()
  const { title, filters, id, image, info } =
    MOCK_PROJECTS[Number(projectId) - 1] || MOCK_PROJECTS[0]

  return (
    <section className={styles.page}>
      <Crumbs links={createCrumps(filters, title, id)} />
      <h1 className={styles.title}>{title}</h1>
      <FilterIconBlock filters={filters} className={styles.filters} />
      <img src={image} alt={title} className={styles.img} />
      <ProjectInfo {...info} />
    </section>
  )
}

export default ProjectPage
