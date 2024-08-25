import { MOCK_WORKS } from "../../mock/mock-works"
import { FILTERS } from "../../shared/constants"
import useWorkFilter from "../../shared/hooks/use-work-filter"
import { WorkCardData } from "../../shared/types"
import WorkCard from "./work-card"
import styles from "./work-list.module.css"
import classNames from "classnames"

const WorkList = () => {
  const works = MOCK_WORKS
  const activeFilter = useWorkFilter() as FILTERS

  const filter = ({ filters }: WorkCardData) =>
    !activeFilter ||
    !Object.keys(FILTERS).includes(activeFilter) ||
    filters.includes(activeFilter)

  return (
    <ul className={classNames(styles.list)}>
      {works.filter(filter).map(work => (
        <WorkCard key={work.id} {...work} />
      ))}
    </ul>
  )
}

export default WorkList
