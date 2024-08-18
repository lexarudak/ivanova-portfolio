import WorksFilter from "../../components/works-filter"
import WorksList from "../../components/work-list"
import styles from "./works-page.module.css"

const WorksPage = () => {
  return (
    <section className={styles.page}>
      <WorksFilter className={styles.filter} />
      <WorksList />
    </section>
  )
}

export default WorksPage
