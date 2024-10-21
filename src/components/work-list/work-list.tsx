import { useCallback, useMemo } from "react"
import { FILTERS } from "../../shared/constants"
import useWorkFilter from "../../shared/hooks/use-work-filter"
import { WorkCardData } from "../../shared/types"
import { selectAllProjects } from "../../store/projects/selectors"
import WorkCard from "./work-card"
import styles from "./work-list.module.css"
import classNames from "classnames"
import { useSelector } from "react-redux"

const WorkList = () => {
  const { projects, projectsOrder } = useSelector(selectAllProjects)
  const activeFilter = useWorkFilter() as FILTERS

  const filter = useCallback(
    ({ filters }: WorkCardData) =>
      !activeFilter ||
      !Object.keys(FILTERS).includes(activeFilter) ||
      filters.includes(activeFilter),
    [activeFilter],
  )

  const filteredProjects = useMemo(
    () => projects.filter(filter),
    [filter, projects],
  )

  const getCurrentWork = useCallback(
    (id: string) => filteredProjects.find(item => item.id === id),
    [filteredProjects],
  )

  return (
    <ul className={classNames(styles.list)}>
      {projectsOrder.map(id => {
        const work = getCurrentWork(id)
        return work ? <WorkCard key={work.id} {...work} /> : null
      })}
    </ul>
  )
}

export default WorkList
