import WorksFilter from "../../components/works-filter"
import styles from "./works-page.module.css"

const WorksPage = () => {
  return (
    <section className={styles.page}>
      <WorksFilter className={styles.filter} />
    </section>
  )
}

export default WorksPage
