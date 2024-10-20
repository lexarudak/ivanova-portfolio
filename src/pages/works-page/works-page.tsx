import WorksFilter from "../../components/works-filter"
import WorkList from "../../components/work-list"
import styles from "./works-page.module.css"
import PageWrapper from "../../components/page-wrapper/page-wrapper"
import { fetchProjects } from "../../store/projects/actions"

const WorksPage = () => {
  return (
    <PageWrapper asyncThunk={fetchProjects}>
      <section className={styles.page}>
        <WorksFilter className={styles.filter} />
        <WorkList />
      </section>
    </PageWrapper>
  )
}

export default WorksPage
