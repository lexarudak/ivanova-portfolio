import { useParams } from "react-router-dom"
import styles from "./project-page.module.css"

const ProjectPage = () => {
  const { projectId } = useParams()
  return <section className={styles.page}>{projectId}</section>
}

export default ProjectPage
