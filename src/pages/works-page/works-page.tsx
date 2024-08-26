import WorksFilter from "../../components/works-filter"
import WorksList from "../../components/work-list"
import styles from "./works-page.module.css"
import { useLoaderData } from "react-router-dom"
import { WorkCardData } from "../../shared/types"

const WorksPage = () => {
  const works = useLoaderData() as WorkCardData[]

  return (
    <section className={styles.page}>
      <WorksFilter className={styles.filter} />
      <WorksList works={works} />
    </section>
  )
}

export default WorksPage
