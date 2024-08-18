import { FILTERS } from "../../shared/constants"
import useFilterNavigate from "../../shared/hooks/use-filter-navigate"
import Button, { BUTTON_VARIANT } from "../shared-components/button"
import styles from "./works-filter.module.css"
import sharedStyles from "../../styles/shared.module.css"
import { FC } from "react"
import classNames from "classnames"
import useWorkFilter from "../../shared/hooks/use-work-filter"

const filterList = [
  { name: "All", variant: BUTTON_VARIANT.main },
  {
    name: "Architect",
    filter: FILTERS.architect,
    variant: BUTTON_VARIANT.architect,
  },
  { name: "Design", filter: FILTERS.design, variant: BUTTON_VARIANT.design },
]

type Props = {
  className?: string
}

const WorksFilter: FC<Props> = ({ className }) => {
  const navigate = useFilterNavigate()
  const activeFilter = useWorkFilter()

  return (
    <div
      className={classNames(
        className,
        styles.container,
        sharedStyles.container,
      )}
    >
      {filterList.map(({ name, filter, variant }) => (
        <Button
          key={name}
          variant={variant}
          onClick={() => navigate(filter)}
          isActive={filter == activeFilter}
          disabled={filter == activeFilter}
        >
          {name}
        </Button>
      ))}
    </div>
  )
}

export default WorksFilter
